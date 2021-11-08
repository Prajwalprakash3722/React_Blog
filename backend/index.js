var express = require("express");
const cors = require("cors");

var app = express();

app.use(cors());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send({
    message: "API Landing Page",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
