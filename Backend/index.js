const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.send("hello from server");

});

app.listen(port, () => {


    console.log(`Server running on http://localhost:${port}`);


});


