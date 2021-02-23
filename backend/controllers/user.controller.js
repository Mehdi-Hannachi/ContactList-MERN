const User = require("../models/User");

exports.addUser = async (req, res) => {
  const { name, email, phoneNumber } = req.body;
  const searchRes = await User.findOne({ email });

  try {
    if (searchRes) return res.json({ msg: "User already exist" });

    const newUser = new User({
      name,
      email,
      phoneNumber,
    });

    await newUser.save();
    await res.status(201).json({ msg: "User Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: "Add user Failed" });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();

  try {
    res.status(201).send(users);
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: "Fetch users failed" });
  }
};
