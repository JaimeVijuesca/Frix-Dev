/**
 * @fileOverview Schemas and types for Genkit flows.
 * This file defines the Zod schemas and TypeScript types for the inputs and outputs
 * of the AI flows in the application.
 */

import { z } from 'genkit';

export const WebsiteIdeaInputSchema = z.object({
  businessDescription: z.string().describe('Una breve descripción del negocio o proyecto.'),
});
export type WebsiteIdeaInput = z.infer<typeof WebsiteIdeaInputSchema>;

export const WebsiteIdeaOutputSchema = z.object({
  title: z.string().describe('Un nombre o título pegadizo para el sitio web.'),
  heroText: z.string().describe('Un eslogan o texto principal para la sección de bienvenida.'),
  valueProposition: z.string().describe('Una frase corta que resuma la propuesta de valor única del negocio.'),
  features: z.array(z.string()).describe('Una lista de 3 características o secciones clave para el sitio web.'),
  callToAction: z.string().describe('Un texto para el botón principal de llamado a la acción (ej. "Contacta", "Ver Productos").'),
  colorPalette: z.object({
    primary: z.string().describe('Un color primario en formato HSL (ej. "231 48% 48%").'),
    accent: z.string().describe('Un color de acento en formato HSL (ej. "174 100% 29%").'),
    description: z.string().describe('Una breve descripción de la paleta de colores y la sensación que transmite (ej. "Moderna y confiable").')
  }).describe('Una paleta de colores sugerida para la web.'),
});
export type WebsiteIdeaOutput = z.infer<typeof WebsiteIdeaOutputSchema>;
