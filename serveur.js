const express = require("express");
const { use } = require("express/lib/application");
const connectDB = require("./backend/config/db");
const dotenv = require("dotenv").config();
const app = express();
const port = 5000;

// DB connection
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use("/link", require("./backend/routes/wonderlink.routes"));
app.use("/log", require("./backend/routes/user.route"));


app.listen(port, () =>console.log("Le serveur a demarré au port " + port))