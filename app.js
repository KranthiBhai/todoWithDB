const express = require("express");
const bodyParser = require("body-parser");

const app = express();


// Creating an end-point to test for routing
app.get("/", (req, res)=>{
    res.send("Hello World!")
});


app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
});