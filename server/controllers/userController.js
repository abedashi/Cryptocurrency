const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register new User
// @route   POST /api/users/register
// @acess   Public
const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, term } = req.body;

  if (!firstName || !lastName || !email || !password || !term) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Checj if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("This email is already connected to an account");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(password, salt);

  // Create new User
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hasedPassword,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      fname: user.firstName,
      email: user.email,
      token: genrateToken({ id: user._id }),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// @desc    Authenticate a User
// @route   POST /api/users/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user._id,
      fname: user.firstName,
      email: user.email,
      token: genrateToken({ id: user._id }),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const me = asyncHandler(async (req, res) => {
  res.status(200).json(res.user);
});

const genrateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  register,
  login,
  me,
};
