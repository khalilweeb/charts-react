const express = require("express");
const mongoose = require("mongoose");

var cors = require('cors');
const app = express();


app.use(cors());
mongoose.connect("mongodb+srv://admin:admin@cluster0.ksesmfh.mongodb.net/?retryWrites=true&w=majority").then(() => {
console.log("connected to the server");

}).catch((err) => {
    console.log(err);
});

app.listen(6000);
