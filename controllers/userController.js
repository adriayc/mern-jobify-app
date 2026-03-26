import { promises as fs } from 'fs';
import { StatusCodes } from 'http-status-codes';
import { v2 as cloudinary } from 'cloudinary';
// Models
import User from '../models/UserModel.js';
import Job from '../models/JobModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();

  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();

  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
  // Delete password
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const response = await cloudinary.uploader.upload(req.file.path);
    await fs.unlink(req.file.path); // Removes files or symbolic links
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  // Find and update user
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  // Remove the previous avatar (cloudinary)
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.uploader.destroy(updatedUser.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: 'update user' });
};
