// services/email.js
const nodemailer = require("nodemailer");

const enviarCorreo = async (orden) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { nombre_usuario, telefono, extension, email, oficina, descripcion } = orden;

  const mensajeHTML = `
    <h3>📥 Nueva Orden de Trabajo Recibida</h3>
    <ul>
      <li><strong>Nombre:</strong> ${nombre_usuario}</li>
      <li><strong>Teléfono:</strong> ${telefono}${extension ? ` Ext. ${extension}` : ''}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Oficina:</strong> ${oficina}</li>
      <li><strong>Descripción:</strong> ${descripcion}</li>
    </ul>
  `;

  const mensajeSMS = `Nueva orden: ${nombre_usuario}, ${telefono}${extension ? ` ext ${extension}` : ''}, ${oficina}`;

  const mailOptions = [
    {
      from: `"Sistema de Ordenes" <${process.env.EMAIL_USER}>`,
      to: "lnieves@barceloneta.pr.gov", // Email principal
      subject: "Nueva Orden de Trabajo",
      html: mensajeHTML,
    },
    {
      from: `"Sistema de Ordenes" <${process.env.EMAIL_USER}>`,
      to: "7874105518@text.libertypr.com", // Envío a SMS del supervisor
      subject: "", // No todos los proveedores aceptan subject
      text: mensajeSMS,
    }
  ];

  for (const mail of mailOptions) {
    try {
      await transporter.sendMail(mail);
    } catch (err) {
      console.error("❌ Error enviando notificación:", err);
    }
  }
};

module.exports = enviarCorreo;