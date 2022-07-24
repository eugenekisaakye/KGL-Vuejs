const express = require("express");
const app = express();
const path = require('path')
const router = express.Router();
const port = 9000;
const mongoose = require("mongoose");
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});
const cors = require("cors");


//Configuring middle-ware
app.use(expressSession);
// app.use(cors);
app.use(express.static('html'));


// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });


router.get('/', function(req,res) {
  res.send('/html/index.html')
});

router.get('/html/signUp.html ', function(req,res) {
  res.send(__dirname + '/html/signUp.html')
});


//Mongodb connection
mongoose.connect("mongodb://localhost:27017/KGL-DB", () => {
  console.log("Connected to database!");
});

;


app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});

