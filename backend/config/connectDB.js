const mongoose = require("mongoose");
const config = require("config");
const mongoURI = config.get("mongoURI");

const connectDB = async () => {
  mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("Data base connected successfuly");

  try {
  } catch (error) {
    console.log("Data base error", error);
  }
};

module.exports = connectDB;
