var jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  try {
    let token = req.header("x-token");
    if (!token) {
      return res.status(400).send("Token Not found");
    }
    let decode = jwt.verify(token, "jwtSecret");
    req.user = decode;
    next();
    // next();
  } catch (error) {
    if (error) throw Error;
    return res.status(400).send("middleware error");
  }
}

function verifyTokenAndAuthorization(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
