
const express = require("express");
const router = express.Router();

const { crearOrden } = require("../controllers/ordenCtrl");

// Ruta para registrar órdenes
router.post("/ordenes", crearOrden);

// Ruta de prueba GET para verificar conexión
router.get("/test", (req, res) => {
  res.send("¡Ruta GET funcionando!");
});

module.exports = router;

