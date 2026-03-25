import { StatusCodes } from 'http-status-codes';
// Models
import User from '../models/UserModel.js';
// Utils
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';
import { createJWT } from '../utils/tokenUtils.js';
// Errors
import { UnauthenticatedError } from '../errors/customErrors.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  // Hash password
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
  // Check if user exits
  // Check if password is correct
  const user = await User.findOne({
    email: req.body.email,
  });
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  // Create token
  const token = createJWT({
    userId: user._id,
    role: user.role,
  });

  // Attach token to cookie
  const oneDay = 1000 * 60 * 60 * 24; // 1 day (millisecond)
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};
