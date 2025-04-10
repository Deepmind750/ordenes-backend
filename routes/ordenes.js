
const { crearOrden, obtenerOrdenes } = require("../controllers/ordenCtrl");

// Ruta para registrar órdenes
router.post("/ordenes", crearOrden);

// Nueva ruta para obtener órdenes
router.get("/ordenes", obtenerOrdenes);

// Ruta de prueba GET para verificar conexión
router.get("/test", (req, res) => {
  res.send("¡Ruta GET funcionando!");
});

