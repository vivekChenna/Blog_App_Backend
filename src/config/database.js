const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const connectWithDB = async () => {
  await mongoose.connect(process.env.DATABASE_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("successfully connected with mongoDB");
};

module.exports = {
  PORT: process.env.PORT,
  connectWithDB,
};
