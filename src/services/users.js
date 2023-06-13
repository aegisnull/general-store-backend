const User = require("../models/user");

exports.signup = async (userData) => {
  const { email, password, name } = userData;
  const user = new User({ email, password, name });
  return await user.save();
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  if (user.password !== password) {
    throw new Error("Invalid email or password");
  }

  return user;
};
