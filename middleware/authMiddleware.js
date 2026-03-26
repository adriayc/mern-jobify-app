// Errors
import {
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';
// Utils
import { verifyJTW } from '../utils/tokenUtils.js';

export const authenticateUse = (req, res, next) => {
  //   console.log(req.cookies);
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, role } = verifyJTW(token);
    req.user = { userId, role };

    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError('authentication invalid');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('unauthorized to access this route');
    }
    next();
  };
};
