const express = require("express");
const router = express.Router();
const Product = require("../Models/ProductSchema");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../Middleware/verifyToken");

//Post Product Data
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const { productname, description, img, categories, size, price } = req.body;

    const product = await Product.findOne({ productname });
    if (product) {
      res.status(400).send(" product is  already register");
    }
    const productdata = new Product({
      productname,
      description,
      img,
      categories,
      size,
      price,
    });
    await productdata.save();
    res.status(200).send("product data has updated");
  } catch (error) {
    if (error) throw error;
    res.status(500).send("error in posting product " + error);
  }
});

//UPDATE PRODUCT DATA
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const productdata = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(productdata);
  } catch (error) {
    if (error) throw error;
    res.status(500).send("error in updating product data");
  }
});

//DELATE PRODUCT DATA
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("product deleted succesfully");
  } catch (error) {
    if (error) throw error;
    res.status(500).send("error in deleting product " + error);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const productsdata = await Product.findById(req.params.id);
    res.status(200).json(productsdata);
  } catch (error) {
    if (error) throw error;
    res.status(500).send("error in getting product data");
  }
});

//GET ALL PRODUCT
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
