import { StatusCodes } from 'http-status-codes';
// Models
import Job from '../models/JobModel.js';

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});

  res.status(StatusCodes.OK).json({ jobs }); // 200
};

export const createJob = async (req, res) => {
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job }); //201
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id);
  if (!job) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `no job with id ${id}` }); // 404
  }

  res.status(StatusCodes.OK).json({ job }); // 200
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `no job with id ${id}` }); // 404
  }

  res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob }); // 200
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const removedJob = await Job.findByIdAndDelete(id);
  if (!removedJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `no job with id ${id}` }); // 404
  }

  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob }); // 200
};
