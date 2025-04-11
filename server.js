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
const firmaRouter=require("./routes/firma");
//Render espera que uses exactamente este puerto const PORT=process.env.PORT;

app.listen(PORT, () =>{
Console.log(`✅ Servidor backend corriendo en el puerto ${PORT}`);
});