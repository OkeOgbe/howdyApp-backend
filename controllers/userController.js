const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.createUser = catchAsync(async (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
});

exports.getUser = catchAsync(async (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
});

exports.updateUser = catchAsync(async (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
});

exports.deleteUser = catchAsync(async (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
});
