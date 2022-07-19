const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});
const cors = require("cors");

// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/test");
// }



//Configuring middle-ware
app.use(expressSession);
app.use(cors);

//Mongodb connection
mongoose.connect("mongodb://localhost:27017/KGL-DB", () => {
  console.log("Connected to database!");
});

app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});
