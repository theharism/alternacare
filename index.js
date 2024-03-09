const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", require("./routes/quiz"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server listening on port ${port}!`);
});
