const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config();

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("hello from server");

});

app.get('/twitter', (req, res) => {
    res.send("open twitter");


});

app.get('/login', (req, res) => {
    res.send("tap to login")

})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});


