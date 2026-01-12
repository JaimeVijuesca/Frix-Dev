'use server';
/**
 * @fileOverview Flujo de Genkit para generar ideas de sitios web.
 *
 * - generateWebsiteIdea - Genera un concepto básico para un sitio web.
 */

import { ai } from '../genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { WebsiteIdeaInputSchema, WebsiteIdeaOutputSchema, type WebsiteIdeaInput, type WebsiteIdeaOutput } from '../schemas';

const prompt = `Tu tarea es generar un concepto de sitio web en formato JSON basado en la descripción de un negocio.

**Descripción del negocio:**
{{{input.businessDescription}}}

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

Asegúrate de que tu respuesta sea únicamente el objeto JSON solicitado.`;

const generateWebsiteIdeaFlow = ai.defineFlow(
  {
    name: 'generateWebsiteIdeaFlow',
    inputSchema: WebsiteIdeaInputSchema,
    outputSchema: WebsiteIdeaOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      model: googleAI.model('gemini-pro'),
      prompt,
      input: { input },
      output: { schema: WebsiteIdeaOutputSchema },
      temperature: 0.8, // Opcional: controla creatividad
    });
    return output!;
  }
);

export async function generateWebsiteIdea(input: WebsiteIdeaInput): Promise<WebsiteIdeaOutput> {
  return generateWebsiteIdeaFlow(input);
}
