import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import "dotenv/config";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("Content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({ success: false, message: "Tipo de contenido inválido" }),
        { status: 400 }
      );
    }

    const { name, email, message } = await request.json();

    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Correo para el admin
    const mailToAdmin = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Nuevo mensaje desde el formulario de contacto",
      html: `
        <h2>📩 Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `,
    };

    // Correo para el usuario que envió el formulario
    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Gracias por tu mensaje",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px; color: #333;">
      <h2 style="color: #2c3e50;">Estimado/a ${name},</h2>
      <p>Muchas gracias por ponerte en contacto conmigo.</p>
      <p>He recibido tu mensaje y lo revisaré con atención. Me aseguraré de responderte a la brevedad posible.</p>
      <p style="margin-top: 20px;"><strong>Mensaje recibido:</strong></p>
      <blockquote style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2c3e50; font-style: italic; margin: 0;">
        ${message}
      </blockquote>
      <p style="margin-top: 30px;">Quedo atento a cualquier otra información adicional que desees compartir.</p>
      <p style="margin-top: 20px;">Saludos cordiales,<br/><strong>Alan Rios</strong></p>
    </div>
  `,
    };

    // Enviar ambos correos
    await transporter.sendMail(mailToAdmin);
    await transporter.sendMail(mailToUser);

    return new Response(
      JSON.stringify({ success: true, message: "Mensaje enviado con éxito" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el mensaje" }),
      { status: 500 }
    );
  }
};
