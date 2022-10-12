const express = require("express");
const globalAppError = require("./controllers/errorController")

const userRoutes = require("./routes/userRoutes")
const CatogeriesRoutes = require("./routes/categoriesRoutes")
const athleteRoutes = require("./routes/athleteRoutes")
const app = express();


app.use(express.json());


app.use("/api/v1/users", userRoutes);
app.use("/api/v1/category", CatogeriesRoutes);
app.use("/api/v1/athlete", athleteRoutes);

app.use(globalAppError);


module.exports = app