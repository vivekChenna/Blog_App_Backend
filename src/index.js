const express = require("express");
const app = express();
const { PORT, connectWithDB } = require("./config/database");
const blogRoutes = require("./routes/blogRoutes");

app.use(express.json());

app.use("/api/v1" , blogRoutes);

app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h1> Hello Guys </h1>`);
});
