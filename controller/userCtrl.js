const User = require("../models/userModel");

const createUser = async (req, res) => {
  const { email, phone, firstName, lastName } = req.body;

  const findUser = await User.findOne({ email });

  if (findUser) {
    res.json({
      msg: "User already exist",
      success: false,
    });

    //User already exist
  } else {
    //create user
    const newUser = await User.create(req.body);
    res.json(newUser);
  }
};

module.exports = createUser;
