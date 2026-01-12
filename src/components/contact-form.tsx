"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_5mwd6xo",   // reemplaza con tu ID de servicio
        "template_qij0jvp",  // reemplaza con tu ID de plantilla
        form,
        "B99C6rwLBh5oyAtsq"    // reemplaza con tu clave pública
      )
      .then(
        () => {
          setStatus("¡Correo enviado correctamente!");
          form.reset();
        },
        (err) => {
          console.error(err);
          setStatus("Error al enviar el correo.");
        }
      );
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2 text-left">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" placeholder="Tu nombre" required />
      </div>
      <div className="space-y-2 text-left">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
      </div>
      <div className="space-y-2 text-left">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" name="message" placeholder="Cuéntanos sobre tu proyecto" required />
      </div>
      <Button type="submit" className="w-full">
        <Send className="mr-2 h-4 w-4" /> Enviar Solicitud
      </Button>
      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  );
}
