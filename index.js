import conn from "./src/database/dbConfig.js";
const express = require("express");
const app = express();
const mysql = require("mysql2");
const PORT = process.env.PORT || 3000;

const routers = require("./src/routes/routes.js");

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
}
);

app.use("/api", routers);
// app.use("/typesexercise", routers);