const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Ejecuta tabla si no existe
require("./db/init");

// Rutas
const ordenesRouter = require("./routes/ordenes");
const firmaRouter = require("./routes/firma");

app.use("/api", ordenesRouter);
app.use("/api", firmaRouter);

// Render espera que uses exactamente este puerto
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en el puerto ${PORT}`);
});