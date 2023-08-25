const dotenv = require("dotenv");
const mongoose = require("mongoose");

// job bhi aapki configurations hai vo process wale object me load kardeta hai dotenv.config();
dotenv.config();

const connectWithDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("successfully connected with mongoDB");
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
};

module.exports = {
  PORT: process.env.PORT,
  connectWithDB,
};
