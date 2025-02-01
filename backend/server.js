const cors = require("cors");
const express = require("express");
const json = require("body-parser");

const app = express();
app.use(cors());
app.use(json());

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});