const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");

//connect to database
dbConnect();

app.use("/", (req, res) => {
  res.send("Hello World!aaaaaa");
});

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`);
});
