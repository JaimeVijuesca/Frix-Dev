'use server';
/**
 * Genera ideas de sitios web usando tu backend FastAPI con tiny-gpt2.
 */

import { WebsiteIdeaInput, WebsiteIdeaOutput } from '../schemas';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://ia-web-7fur.onrender.com';

export async function generateWebsiteIdea(
  input: WebsiteIdeaInput
): Promise<WebsiteIdeaOutput> {
  // Prompt que será enviado al modelo
  const prompt = `Tu tarea es generar un concepto de sitio web en formato JSON basado en la descripción de un negocio.

**Descripción del negocio:**
${input.businessDescription}

Basado en la descripción anterior, genera los siguientes campos:
1.  **title:** Un nombre creativo y memorable para el sitio web.
2.  **heroText:** Una frase de bienvenida potente que capte la atención.
3.  **valueProposition:** Para depurar, pon aquí exactamente: "Debug: " y luego la descripción del negocio que te han pasado.
4.  **features:** Un array con 3 características o secciones clave, descritas desde el punto de vista del beneficio para el cliente.
5.  **callToAction:** Un texto para un botón de llamada a la acción que sea específico y motive a actuar.
6.  **colorPalette:** Un objeto con:
    - **primary:** Un color primario en formato HSL (ej: "231 48% 48%").
    - **accent:** Un color de acento en formato HSL (ej: "174 100% 29%").
    - **description:** Una justificación breve de la elección de colores basada en la psicología del color y el negocio.

Devuelve únicamente el objeto JSON solicitado.`;

  try {
    const res = await fetch(`${BACKEND_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, max_length: 512 }),
    });

    if (!res.ok) {
      throw new Error(`Backend error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    // Se espera que la respuesta devuelva un JSON en formato string dentro de completion
    return JSON.parse(data.completion) as WebsiteIdeaOutput;
  } catch (err) {
    console.error(err);
    throw new Error('Error generando la idea de sitio web. Intenta de nuevo más tarde.');
  }
}
