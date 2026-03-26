import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import dayjs from 'dayjs';
// Models
import Job from '../models/JobModel.js';

export const getAllJobs = async (req, res) => {
  // Query params
  const { search, jobStatus, jobType } = req.query;

  // Query object
  const queryObject = {
    createdBy: req.user.userId,
  };

  // Search (position or company)
  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: 'i' } },
      { company: { $regex: search, $options: 'i' } },
    ];
  }
  // Job status
  if (jobStatus && jobStatus !== 'all') {
    queryObject.jobStatus = jobStatus;
  }
  // Job type
  if (jobType && jobType !== 'all') {
    queryObject.jobType = jobType;
  }

  const jobs = await Job.find(queryObject);

  res.status(StatusCodes.OK).json({ jobs }); // 200
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job }); //201
};

export const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  res.status(StatusCodes.OK).json({ job }); // 200
};

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob }); // 200
};

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob }); // 200
};

export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } }, // Match by createdBy
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } }, // Group by jobStatus and count
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  // console.log(stats);

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } }, // Match by createdBy
    {
      // Group by year and month, and count
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } }, // Sort by year and month (-1: descending)
    { $limit: 6 }, // Limit
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = dayjs()
        .month(month - 1)
        .year(year)
        .format('MMM YY');

      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
