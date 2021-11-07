var express = require("express");
var app = express();
const PORT = 5000;

app.get("/", function (req, res) {
  res.send({
    message: "API Landing Page",
  });
});

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
