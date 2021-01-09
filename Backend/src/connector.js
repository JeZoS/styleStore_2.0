const mongoURI = "mongodb://localhost:27017/super-stylist";

let mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
