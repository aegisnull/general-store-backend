const UserService = require("../services/users");

exports.signup = async (req, res) => {
  try {
    const userData = req.body;
    const user = await UserService.signup(userData);
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error("error", error);
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await UserService.login(email, password);
    res.status(200).json({ message: "User logged in", token });
  } catch (error) {
    console.error("error", error);
    res.status(400).json({ message: error.message });
  }
};
