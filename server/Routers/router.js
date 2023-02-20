var express = require("express");
var RegisterUser = require("../Models/RegisterUser");
var router = express.Router();
var jwt = require("jsonwebtoken");
var middleware = require("../Middleware/middleware");

router.get("/", (req, res) => {
  try {
    res.send("hi");
  } catch (error) {
    console.log(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    const exists = await RegisterUser.findOne({ email });
    if (email == exists.email) {
      return res.status(401).send("email is already register");
    }
    if (password != confirmPassword) {
      return res.status(401).send("password did not match");
    }

    const newUser = new RegisterUser({
      username,
      email,
      password,
      confirmPassword,
    });
    await newUser.save();
    res.status(200).send("data is updated");
  } catch (err) {
    console.log(err);
    return res.status(400).send("error in server side");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const exits = await RegisterUser.findOne({ email });
    if (!exits) {
      return res.status(400).send("email is not register");
    }

    if (exits.password !== password) {
      return res.status(400).send("wrong credentials");
    }

    let payload = {
      user: {
        id: exits.id,
      },
    };

    jwt.sign(payload, "jwtSecret", { expiresIn: 3600000000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send("server error");
  }
});

router.get("/home", middleware, async (req, res) => {
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
