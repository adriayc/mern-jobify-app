import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

const app = express();

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
];

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello world');
});
app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});
// Get All Jobs
app.get('/api/v1/jobs', (req, res) => {
  return res.status(200).json({ jobs });
});
// Create Job
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    // return res.status(400).json({ msg: 'please provide company and position' });
    res.status(400).json({ msg: 'please provide company and position' });
    return;
  }

  const id = nanoid(10);
  const job = { id, company, position };

  jobs.push(job);

  // return res.status(201).json({ job });
  res.status(201).json({ job });
});
// Get Single Job
app.get('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({ job });
});
// Update Job
app.patch('/api/v1/jobs/:id', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ msg: 'please provide company and position' });
    return;
  }

  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ msg: 'job modified', job });
});
// Delete Job
app.delete('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: 'job deleted' });
});

// Custom middlewares
// Not Found
// app.use('*', (req, res) => { // Error (Express 5.x)
app.use((req, res) => {
  res.status(404).json({ msg: 'not found' });
});
// Error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});

const port = process.env.PORT || 5000;
// Listen port
app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
