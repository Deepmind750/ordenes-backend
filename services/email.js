const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const enviarCorreo = async (orden) => {
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `Nueva Orden de Trabajo - ${orden.nombre_usuario}`,
    text: `Se ha registrado una nueva orden:\n\nNombre: ${orden.nombre_usuario}\nTeléfono: ${orden.telefono}\nExtensión: ${orden.extension || 'N/A'}\nEmail: ${orden.email}\nOficina: ${orden.oficina}\nDescripción: ${orden.descripcion}`,
    html: `
      <h2>Nueva Orden de Servicio</h2>
      <p><strong>Nombre:</strong> ${orden.nombre_usuario}</p>
      <p><strong>Teléfono:</strong> ${orden.telefono}</p>
      <p><strong>Extensión:</strong> ${orden.extension || 'N/A'}</p>
      <p><strong>Email:</strong> ${orden.email}</p>
      <p><strong>Oficina:</strong> ${orden.oficina}</p>
      <p><strong>Descripción:</strong><br/>${orden.descripcion}</p>
    `
  };
  console.log('Destino del correo:', process.env.EMAIL_TO);

  console.log('FROM:', msg.from);
console.log('TO:', msg.to);

  await sgMail.send(msg);
};

module.exports = enviarCorreo;