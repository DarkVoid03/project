const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    // Redirect to login page
    return res.redirect('/login');
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, "hinduja");

    // Check if the user is an admin
    if (!decoded.user.isAdmin) {
      // Redirect to login page
      return res.redirect('/login');
    }

    // Attach user information to the request object
    req.user = decoded;

    // Call the next middleware function
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    // Redirect to login page
   // res.redirect('/login');
  }
};

module.exports = authMiddleware;
