// middlewares/authorizeAdmin.js
const authorizeAdmin = (req, res, next) => {
  // Assuming req.user is set from a previous auth middleware
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).send({ message: 'Access denied. Requires admin role.' });
  }
};
export default authorizeAdmin;
