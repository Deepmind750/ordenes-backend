const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const enviarCorreo = async (orden) => {
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `Nueva Orden de Trabajo - ${orden.nombre_usuario}`,
    text: `Se ha registrado una nueva orden:\n\nNombre: ${orden.nombre_usuario}\nTeléfono: ${orden.telefono}\nExtensión: ${orden.extension || 'N/A'}\nEmail: ${orden.email}\nOficina: ${orden.oficina}\nDescripción: ${orden.descripcion}`,
  };

  await sgMail.send(msg);
};

module.exports = enviarCorreo;