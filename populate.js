import 'dotenv/config';
import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
// Models
import User from './models/UserModel.js';
import Job from './models/JobModel.js';

try {
  // Connect DB
  await mongoose.connect(process.env.MONGO_URL);
  // Get user
  const user = await User.findOne({ email: 'test@test.com' });
  //   const user = await User.findOne({ email: 'john@mail.com' });
  // Read file
  const jsonJobs = JSON.parse(
    await readFile(new URL('./utils/mockData.json', import.meta.url)),
  );
  // Add the createdBy attribute
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  // Delete all previous documents (database)
  await Job.deleteMany({ createdBy: user._id });
  // Create jobs
  await Job.create(jobs);
  console.log('Jobs created successfully');
  process.exit(0); // The process ends without failure
} catch (error) {
  console.log(error);
  process.exit(1); // The process ends with some failure
}
