const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');

// Start express app
const app = express();

// 1 MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTE HANDLERS
app.get('/', (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({ requestedAt: req.requestTime, message: 'Done' });
});

// ROUTES
app.use('/api/v1/users', userRouter);

module.exports = app;
