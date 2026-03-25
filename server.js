import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// Routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
// Custom middlewares
import errorHandleMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUse } from './middleware/authMiddleware.js';

const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/v1/jobs', authenticateUse, jobRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authenticateUse, userRouter);

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
