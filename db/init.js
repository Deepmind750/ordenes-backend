const pool = require("./db");

const crearTablaSiNoExiste = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS ordenes_trabajo (
        id SERIAL PRIMARY KEY,
        nombre_usuario VARCHAR(100) NOT NULL,
        telefono VARCHAR(20),
        email VARCHAR(100),
        oficina VARCHAR(100),
        descripcion TEXT,
        fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Tabla 'ordenes_trabajo' verificada/creada.");
  } catch (err) {
    console.error("❌ Error al crear tabla:", err);
  }
};

crearTablaSiNoExiste();
