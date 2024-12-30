import User from "../Models/User.js";

import bcrypt from "bcryptjs";

const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all the required fields",
        success: false,
      });
    }
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const user = new User({
      name,
      email,
      password: hash,
      role: "GENERAL",
    });

    await user.save();
    res
      .status(201)
      .json({ message: "User created successfully", user, success: true });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

export default userSignUp;
