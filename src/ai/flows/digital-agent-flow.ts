'use client';

import { MessageData } from 'genkit';

const responses = {
  servicios: `Ofrecemos los siguientes servicios:
- Diseño Web a Medida: Diseños únicos y atractivos.
- E-commerce: Tiendas online robustas y seguras.
- Landing Pages: Páginas de aterrizaje de alto impacto.
- Integración con IA: Potenciar webs con inteligencia artificial.`,
  precios: `Nuestros precios son:
- Landing Page Básica: 10-20 €
- Web Corporativa: 30-50 € (el plan más popular)
- Web Dinámica Básica: 70-100 €
- Mantenimiento opcional: desde 5-10 €/mes.
Además ofrecemos un prototipo gratuito antes de pagar.`,
  contacto: `Para contactar con nosotros, por favor rellena el formulario en la sección de contacto de nuestra web.`,
  proceso: `Nuestro proceso de trabajo es:
1. Consulta y Plan
2. Diseño y Desarrollo
3. Revisión y Feedback
4. Lanzamiento y Entrega`
};

// Preguntas sugeridas para el cliente
const suggestions = `
Puedes probar preguntando:
- ¿Qué servicios ofrecéis?
- ¿Cuánto cuesta una web?
- ¿Cuál es vuestro proceso de trabajo?
- ¿Cómo puedo contactar con vosotros?
`;

// Lista de palabras clave por categoría
const keywords = {
  servicios: ['servicios', 'ofrecéis', 'ofrecer'],
  precios: ['precio', 'coste', 'cuesta', 'cuánto', 'cuanto'],
  contacto: ['contacto', 'contactar', 'formulario'],
  proceso: ['proceso', 'trabajo', 'pasos', 'plan']
};

export async function digitalAgent(
  history: MessageData[],
  message: string
): Promise<string> {
  const msg = message.toLowerCase();

  // Función para comprobar si alguna palabra clave está en el mensaje
  function containsKeyword(category: keyof typeof keywords) {
    return keywords[category].some((k) => msg.includes(k));
  }

  if (containsKeyword('servicios')) return responses.servicios;
  if (containsKeyword('precios')) return responses.precios;
  if (containsKeyword('contacto')) return responses.contacto;
  if (containsKeyword('proceso')) return responses.proceso;

  return `Lo siento, no tengo esa información. ${suggestions}`;
}
