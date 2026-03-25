import express from 'express';

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Listen port
app.listen(5000, () => {
  console.log('server running...');
});
