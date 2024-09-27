const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.user.isAdmin !== 1) {
    return res.status(403).json({ message: 'Access denied. Admins only.'});
  }
  next();
};