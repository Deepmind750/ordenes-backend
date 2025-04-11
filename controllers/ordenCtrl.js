const pool = require("../db/db");
const enviarCorreo = require("../services/email");

const crearOrden = async (req, res) => {
  const { nombre_usuario, telefono, email, oficina, descripcion } = req.body;

  try {
    console.log("Datos recibidos:", req.body);

    const result = await pool.query(
      `INSERT INTO ordenes_trabajo
       (nombre_usuario, telefono, email, oficina, descripcion)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [nombre_usuario, telefono, email, oficina, descripcion]
    );

    // Enviar correo + SMS
    await enviarCorreo(result.rows[0]);

    res.status(201).json({
      mensaje: "Orden registrada con éxito",
      orden: result.rows[0],
    });
  } catch (err) {
    console.error("error al registrar orden:", err.message);
    res.status(500).json({ error: "Error al registrar la orden" });
  }
};

module.exports = { crearOrden };