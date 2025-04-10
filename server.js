const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const ordenesRouter = require("./routes/ordenes");
const firmaRouter = require("./routes/firma"); // 👈 Agregado

app.use("/api", ordenesRouter);
app.use("/api", firmaRouter); // 👈 Agregado

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});

