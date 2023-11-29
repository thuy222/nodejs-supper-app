// const mongoose = require("mongoose");

const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URL);
    console.log("connected successfully");
  } catch (error) {
    console.log("error to connect mongodb", error);
  }
};

module.exports = dbConnect;
