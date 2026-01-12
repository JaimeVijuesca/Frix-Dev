'use server';
/**
 * Genera ideas de sitios web usando Ollama Cloud vía HTTP.
 */

import { WebsiteIdeaInput, WebsiteIdeaOutput } from '../schemas';

const OLLAMA_API_KEY = process.env.OLLAMA_API_KEY; // Pon tu API key de Ollama Cloud
const OLLAMA_MODEL = 'llama2-7b'; // Modelo que quieres usar

export async function generateWebsiteIdea(
  input: WebsiteIdeaInput
): Promise<WebsiteIdeaOutput> {
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

  const res = await fetch(`https://api.ollama.com/models/${OLLAMA_MODEL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OLLAMA_API_KEY}`,
    },
    body: JSON.stringify({ prompt, temperature: 0.8, max_tokens: 512 }),
  });

  if (!res.ok) {
    throw new Error(`Ollama API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  // Ollama Cloud devuelve el texto en data.text o similar según su API
  return JSON.parse(data.text) as WebsiteIdeaOutput;
}
