import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import headers from "./Middlewares/headers"

import RouteUsers from "./Routes/UsersRoute";
import RouteDoctor from "./Routes/DoctorRoute";
import RouteUrgence from "./Routes/UrgenceRoute";
import RoutePat from "./Routes/PatRoute";
import RouteRdv from "./Routes/RdvRoute";

const app = express();

mongoose.connect("mongodb://localhost/Wivital", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(headers);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/api",
  RouteUsers,
  RouteDoctor,
  RouteUrgence,
  RouteRdv,
  RoutePat,
  require("./Api/OrdonnanceApi")
);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Serveur started"));
