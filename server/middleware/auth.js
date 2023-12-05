const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const userModel = require('../models/users');

exports.protect = async (req, res, next) => {
  let token;

  // If 'authorization' header present and starts Wwth 'Bearer' word

  if (req.headers.authorization) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Splits "Bearer <TOKEN>"

      //decodes token id
      const decoded = jwt.verify(token, JWT_SECRET);

      // Find user with the id and return it without the password
      const user = await userModel.findById(decoded._id).select('-password');

      req.user = user;
      next(); // Move on to next operation
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: 'Not authorized, token failed'
      });
    }
  }

  // If token is not present
  if (!token) {
    return res.status(401).json({
      success: false,
      statusCode: 401,
      message: 'Not authorized, no token provided'
    });
  }
};

exports.loginCheck = (req, res, next) => {
  try {
    let token = req.headers.token;
    token = token.replace('Bearer ', '');
    decode = jwt.verify(token, JWT_SECRET);
    req.userDetails = decode;
    next();
  } catch (err) {
    res.json({
      error: 'You must be logged in'
    });
  }
};

exports.isAuth = (req, res, next) => {
  let { loggedInUserId } = req.body;
  if (
    !loggedInUserId ||
    !req.userDetails._id ||
    loggedInUserId != req.userDetails._id
  ) {
    res.status(403).json({ error: 'You are not authenticate' });
  }
  next();
};

exports.isAdmin = async (req, res, next) => {
  try {
    let reqUser = await userModel.findById(req.body.loggedInUserId);
    // If user role 0 that's mean not admin it's customer
    if (reqUser.userRole === 0) {
      res.status(403).json({ error: 'Access denied' });
    }
    next();
  } catch {
    res.status(404);
  }
};
