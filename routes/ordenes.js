
const express = require("express");
const router = express.Router();
const { crearOrden } = require("../controllers/ordenCtrl");

// <-- AQUI pegás la conexión a la base
const pool = require("../db/conexion");

// Ruta para registrar órdenes (POST)
router.post("/ordenes", crearOrden);

// Ruta para obtener todas las órdenes (GET)
router.get("/ordenes", async (req, res) => {
  try {
    const resultado = await pool.query(
      "SELECT * FROM ordenes_trabajo ORDER BY fecha_creacion DESC"
    );
    res.status(200).json(resultado.rows);
  } catch (error) {
    console.error("Error al obtener órdenes:", error.message);
    res.status(500).json({ error: "No se pudieron obtener las órdenes." });
  }
});

// Ruta de prueba (GET)
router.get("/test", (req, res) => {
  res.send("¡Ruta GET funcionando!");
});

module.exports = router;