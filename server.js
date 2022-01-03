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

// API route handlers.
app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
