require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// Middleware.
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

// Static file path.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// API endpoints.
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
