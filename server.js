const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Ejecuta tabla si no existe
require("./db/init");

// Rutas
const ordenesRouter = require("./routes/ordenes");
