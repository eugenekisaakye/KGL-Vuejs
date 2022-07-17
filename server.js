const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose");

// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/test");
// }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Mongodb connection
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://eugeneK:<datniggae>@cluster0.tqq38.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect("mongodb://localhost:27017/KGL-DB", () => {
  console.log("Connected to database!");
});

app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});
