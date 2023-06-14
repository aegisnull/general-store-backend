const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.signup = async (userData) => {
  // Validate that the user data is valid
  const { email, password, name } = userData;
  if (!email || !password || !name) {
    throw new Error("Invalid input");
  }

  // Check to see if the user email address already exists in the database
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with that email address already exists");
  }

  // Hash the user password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({
    email,
    password: hashedPassword,
    name,
  });

  // Save the user to the database
  await user.save();

  // Return the user
  return user;
};

exports.login = async (email, password) => {
  // Check to see if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Check if the password is correct
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Return the user
  return user;
};
