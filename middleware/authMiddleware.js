export const authenticateUse = async (req, res, next) => {
  console.log('auth middleware');
  next();
};
