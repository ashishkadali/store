var express = require("express");
var Users = require("../Models/RegisterUser");
var router = express.Router();
var {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../Middleware/verifyToken");
var CryptoJS = require("crypto-js");
const { create } = require("../Models/RegisterUser");

//UPDATE USER DATA
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      "FUCKYOU"
    ).toString();
  }

  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE USER DATA
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    res.status(200).send(user + " is deleted");
  } catch (error) {
    if (error) throw error;
    res.status(400).send("error in server side");
  }
});

//GET ADMIN USER DETAILS

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const { password, ...others } = user._doc;

    res.status(200).send(others);
  } catch (error) {
    if (error) throw error;
  }
});

//GET ALL USER DATA
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await Users.find();
    // const { password, ...others } = user._doc;
    res.status(200).send(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get user status per month

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.getFullYear() - 1);

  try {
    const data = await Users.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//HOME
router.get("/home", verifyToken, async (req, res) => {
  try {
    let exists = await RegisterUser.findById(req.user.id);
    if (!exists) {
      return res.status(400).send("user not found");
    }
    res.json(exists);
  } catch (error) {
    if (error) throw error;
    return res.status(400).send("server error");
  }
});

module.exports = router;
