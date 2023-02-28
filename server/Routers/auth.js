var express = require("express");
var Users = require("../Models/RegisterUser");
var router = express.Router();
var jwt = require("jsonwebtoken");
var CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Encrypt the password using a key
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      "FUCKYOU"
    ).toString();

    // Check if a user with the given email already exists
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(401).send("Email is already registered");
    }

    // Create a new user object with the provided data
    const newUser = new Users({
      username,
      email,
      password: encryptedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Send a success response to the client
    res.status(200).send("Registration successful");
  } catch (err) {
    // Log the error and send an error response to the client
    // console.log(err);
    res.status(500).send("Server error");
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user with the given email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).send("Email is not registered");
    }

    // Decrypt the password using the key
    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      "FUCKYOU"
    ).toString(CryptoJS.enc.Utf8);

    // Compare the decrypted password with the provided password
    if (decryptedPassword !== req.body.password) {
      return res.status(400).send("Wrong credentials");
    }

    // Send a success response with the user object
    // res.status(200).send(user);

    let payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin,
      },
    };

    const accessToken = jwt.sign(payload, "jwtSecret", { expiresIn: "1d" });

    // to hide password to everyone
    const { password, ...others } = user._doc;

    res.status(200).send({ ...others, accessToken });
  } catch (err) {
    console.error(err);
    return res.status(400).send("server error " + err);
  }
});

module.exports = router;
