const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 8000;

app.listen(8000, (err) =>
  err
    ? console.log("Server Error", err)
    : console.log(`Server is running on PORT ${PORT}`)
);
