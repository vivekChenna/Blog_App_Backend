const express = require("express");
const { PORT, connectWithDB } = require("./config/database");
const app = express();

app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

connectWithDB();
