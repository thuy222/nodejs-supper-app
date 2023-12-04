const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
//connect to database
dbConnect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/user", authRouter);

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`);
});
