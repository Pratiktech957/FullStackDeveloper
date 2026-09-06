require("dotenv").config();

const express = require("express");
const cors = require("cors");

const errorMiddleware = require("./middlewares/errorMiddleware");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/users", userRoutes);

app.get("/api/test", (req, res) => {
    res.json({
        message: "Frontend connected to backend successfully"
    });
});

module.exports = app;