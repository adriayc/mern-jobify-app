import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

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
app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

const port = process.env.PORT || 5000;
// Listen port
app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
