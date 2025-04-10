const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/firma", async (req, res) => {
  const { firmaBase64, nombreDestinatario } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Ordenes de Trabajo" <${process.env.EMAIL_USER}>`,
      to: "destinatario@ejemplo.com",
      subject: `Firma de Recibo - ${nombreDestinatario}`,
      html: `<p>Se ha recibido una nueva firma:</p><img src="${firmaBase64}" alt="Firma" style="border:1px solid #000; max-width: 400px;" />`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ mensaje: "Firma enviada por email con éxito" });
  } catch (error) {
    console.error("Error al enviar email:", error);
    res.status(500).json({ error: "Error al enviar el email" });
  }
});

module.exports = router;