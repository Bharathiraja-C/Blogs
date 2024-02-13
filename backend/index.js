const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const app = express()
const dataRoutes = require("./routes/routes")
const bodyparser = require('body-parser')

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyparser.json());

mongoose.connect("mongodb+srv://quenti20:oJG6IN7thlpZbaka@cluster0.6iqfd11.mongodb.net/")

// mongoose.connect("mongodb+srv://dhiyanesh7338942092:FvpewDMHMvmqRMbT@blog.dae4tcu.mongodb.net/")

app.use('/', dataRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
})