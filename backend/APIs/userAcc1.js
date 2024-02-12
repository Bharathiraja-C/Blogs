const mongoose = require('mongoose');
const fs = require("fs");

const connect = mongoose.connect(
    "mongodb+srv://quenti20:oJG6IN7thlpZbaka@cluster0.6iqfd11.mongodb.net/",{ useNewUrlParser: true, useUnifiedTopology: true });
// this link has mongodb password


// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const userDataSchema = JSON.parse(
    fs.readFileSync("../data/userData.json", "utf-8")
  );

  const userSchema = new mongoose.Schema(userDataSchema);

// Create a Mongoose model
const User = new mongoose.model("User", userSchema);

// // collection part
// const collection = new mongoose.model("Patients", Loginschema);

module.exports = User ;

