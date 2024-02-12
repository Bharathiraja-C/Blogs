const mongoose = require("mongoose");
const express = require("express");
const server = express();
//const path = require("path");
const collection = require("./userAcc1");
const { getMaxListeners } = require("events");


// Example: Create a new user
// const newUser = new User({
//   Name: "Doe",
//   userID: "john_doe123",
//   email: "john.doe@example.com",
//   blogID: ["blog1", "blog2"],
// });
const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const data = {
    Name: "Doe",
    userID: "john_doe123",
    email: "avikpathak2000@gmail.com"
  };
  try {
    const id = await collection.findOne(data);

    if (!id) {
        console.log("hello")
      const userdata = await collection.insertMany(data);
      res.status(200).JSON(userdata);
      return;
    } else {  
      res.status(200);
      return;
    }
  } catch (err) {
    res.status(500);
  }
});

app.get("/",async(req,res)=>{
    console.log("Hello Get Me")
}) ;

const port = 3000; 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});