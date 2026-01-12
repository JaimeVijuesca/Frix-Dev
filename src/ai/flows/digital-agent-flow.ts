'use server';

import { z } from 'zod';
import { MessageData } from 'genkit';

const OLLAMA_API_KEY = process.env.OLLAMA_API_KEY;
const OLLAMA_MODEL = 'llama2-7b';

export async function digitalAgent(
  history: MessageData[],
  message: string
): Promise<string> {
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

  const prompt = `${systemPrompt}\n\nUsuario: ${message}`;

  const res = await fetch(`https://api.ollama.com/models/${OLLAMA_MODEL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OLLAMA_API_KEY}`,
    },
    body: JSON.stringify({ prompt, temperature: 0.7, max_tokens: 512 }),
  });

  if (!res.ok) throw new Error(`Ollama API error: ${res.status} ${res.statusText}`);

  const data = await res.json();
  // Devuelve solo el texto de la IA
  return data.completion as string;
}
