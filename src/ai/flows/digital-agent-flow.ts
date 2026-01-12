'use server';
/**
 * @fileOverview Flujo del agente digital para responder preguntas sobre Frix.
 *
 * - digitalAgent - Una función que responde preguntas sobre Frix.
 * @param history - El historial de la conversación.
 * @param message - El nuevo mensaje del usuario.
 * @returns La respuesta del agente.
 */

import { ai } from '../genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { MessageData } from 'genkit';
import { z } from 'zod';

const DigitalAgentInputSchema = z.object({
  history: z.array(z.custom<MessageData>()),
  message: z.string(),
});

const systemPrompt = `Eres un asistente de IA para Frix, un servicio de desarrollo web. Tu nombre es Asistente Frix.
Eres amigable, profesional y tu objetivo es responder preguntas sobre Frix y ayudar a los usuarios a entender los servicios.

Aquí tienes información sobre Frix que DEBES usar para responder:
- **Servicios Principales**:
  - Diseño Web a Medida: Diseños únicos y atractivos.
  - E-commerce: Tiendas online robustas y seguras.
  - Landing Pages: Páginas de aterrizaje de alto impacto para marketing.
  - Integración con IA: Potenciar webs con inteligencia artificial.
- **Precios**:
  - Landing Page Básica: 10-20 €
  - Web Corporativa: 30-50 € (Es el plan más popular)
  - Web Dinámica Básica: 70-100 €
  - Mantenimiento opcional: desde 5-10 €/mes.
  - Ofrecen un prototipo gratuito para que el cliente vea cómo será su web antes de pagar.
- **Proceso de Trabajo**:
  1. Consulta y Plan
  2. Diseño y Desarrollo
  3. Revisión y Feedback
  4. Lanzamiento y Entrega
- **Stack Tecnológico**: Next.js, Tailwind CSS, y Vercel.
- **Contacto**: Para contactar, el usuario debe rellenar el formulario en la sección de contacto de la web.

Mantén tus respuestas breves y directas. Si no sabes la respuesta a algo, di amablemente que no tienes esa información y sugiere que contacten a través del formulario. No inventes información.`;

const digitalAgentFlow = ai.defineFlow(
  {
    name: 'digitalAgentFlow',
    inputSchema: DigitalAgentInputSchema,
    outputSchema: z.string(),
  },
  async ({ history, message }) => {
    const { text } = await ai.generate({
      model: googleAI.model('gemini-pro'),
      system: systemPrompt,
      history, // Mantiene el historial completo
      prompt: message,
      temperature: 0.7, // Opcional: controla creatividad
      maxOutputTokens: 512, // Opcional: limita la longitud de la respuesta
    });
    return text;
  }
);

export async function digitalAgent(history: MessageData[], message: string): Promise<string> {
  return await digitalAgentFlow({ history, message });
}
