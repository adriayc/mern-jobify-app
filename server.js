import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
// Routers
import jobRouter from './routes/jobRouter.js';
// Custom middlewares
import errorHandleMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/v1/jobs', jobRouter);

// Custom middlewares
// Not Found
// app.use('*', (req, res) => { // Error (Express 5.x)
app.use((req, res) => {
  res.status(404).json({ msg: 'not found' });
});
app.use(errorHandleMiddleware);

const port = process.env.PORT || 5000;
try {
  // Connect DB
  await mongoose.connect(process.env.MONGO_URL);
  // Listen port
  app.listen(port, () => {
    console.log(`server running on port ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
