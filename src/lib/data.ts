import { LayoutTemplate, Store, PenSquare, Briefcase, FileText, CheckCircle, Rocket, Users, FolderKanban, BrainCircuit } from "lucide-react";
import type { Service, PortfolioItem, ProcessStep, User, Client, Project, Asset } from "./definitions";
import { PlaceHolderImages } from "./placeholder-images";

export const services: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Diseño Web a Medida",
    description: "Creamos diseños únicos y atractivos que reflejan la identidad de tu marca y ofrecen una experiencia de usuario excepcional.",
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Desarrollamos tiendas online robustas y seguras, optimizadas para la conversión y fáciles de gestionar.",
  },
  {
    icon: PenSquare,
    title: "Landing Pages",
    description: "Diseñamos páginas de aterrizaje de alto impacto, enfocadas en capturar leads y maximizar tus campañas de marketing.",
  },
  {
    icon: BrainCircuit,
    title: "Integración con IA",
    description: "Potenciamos tu web con soluciones de inteligencia artificial para automatizar tareas y ofrecer experiencias únicas.",
  }
];

export const processSteps: ProcessStep[] = [
    {
        icon: Briefcase,
        title: "Consulta y Plan",
        description: "Analizamos tus necesidades y definimos los objetivos del proyecto."
    },
    {
        icon: PenSquare,
        title: "Diseño y Desarrollo",
        description: "Creamos el diseño y construimos tu sitio web con tecnología de punta."
    },
    {
        icon: FileText,
        title: "Revisión y Feedback",
        description: "Presentamos el progreso y ajustamos detalles según tus comentarios."
    },
    {
        icon: Rocket,
        title: "Lanzamiento y Entrega",
        description: "Desplegamos tu web y te entregamos el control total del proyecto finalizado."
    }
]

export const portfolio: PortfolioItem[] = [
    {
        ...PlaceHolderImages[1],
        title: "Marca de Moda 'Aura'",
        description: "Un e-commerce elegante con un diseño minimalista y una navegación fluida."
    },
    {
        ...PlaceHolderImages[2],
        title: "Portafolio de Fotógrafo",
        description: "Un sitio web visualmente impactante para mostrar trabajos fotográficos con galerías dinámicas."
    },
    {
        ...PlaceHolderImages[3],
        title: "App 'FintechNow'",
        description: "Una landing page moderna para promocionar una nueva aplicación financiera y captar usuarios."
    }
]

export const users: { [key: string]: User } = {
  'client1': {
    id: 'user-1',
    name: 'Ana García',
    email: 'ana.garcia@cliente.com',
    avatarUrl: PlaceHolderImages[4].imageUrl,
    role: 'client',
  },
  'admin1': {
    id: 'user-admin-1',
    name: 'Admin Frix',
    email: 'admin@frix.com',
    avatarUrl: PlaceHolderImages[4].imageUrl,
    role: 'admin',
  }
};

export const clients: Client[] = [
  {
    id: 'client-1',
    name: 'Ana García',
    email: 'ana.garcia@cliente.com',
    company: 'Moda Aura'
  },
  {
    id: 'client-2',
    name: 'Juan Pérez',
    email: 'juan.perez@cliente.com',
    company: 'Fotografía JP'
  },
  {
    id: 'client-3',
    name: 'Lucía Martínez',
    email: 'lucia.martinez@cliente.com',
    company: 'FintechNow'
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: "E-commerce para 'Moda Aura'",
    clientId: 'client-1',
    status: 'entregado',
    createdAt: '2023-10-15',
    updatedAt: '2023-11-20',
    details: 'Desarrollo completo de una tienda online en Shopify, incluyendo pasarela de pago y sistema de gestión de inventario.'
  },
  {
    id: 'proj-2',
    name: "Sitio Web Corporativo 'Fotografía JP'",
    clientId: 'client-2',
    status: 'en progreso',
    createdAt: '2024-01-10',
    updatedAt: '2024-02-05',
    details: 'Diseño y desarrollo de un portafolio web con galerías de imágenes optimizadas y un sistema de reservas.'
  },
  {
    id: 'proj-3',
    name: "Landing Page para App 'FintechNow'",
    clientId: 'client-3',
    status: 'pendiente',
    createdAt: '2024-02-01',
    updatedAt: '2024-02-01',
    details: 'Creación de una landing page para captación de leads, con integración a Mailchimp y un diseño enfocado en la conversión.'
  },
    {
    id: 'proj-4',
    name: "Blog Personal 'Viajes de Ana'",
    clientId: 'client-1',
    status: 'en progreso',
    createdAt: '2024-02-15',
    updatedAt: '2024-02-28',
    details: 'Desarrollo de un blog personal con sistema de gestión de contenidos (CMS) para publicar artículos y fotos de viajes.'
  }
];

export const projectAssets: { [key: string]: Asset[] } = {
  'proj-2': [
    { id: 'asset-1', name: 'Logo_JP.png', type: 'logo', url: '#', uploadedAt: '2024-01-12' },
    { id: 'asset-2', name: 'galeria_principal.zip', type: 'imagen', url: '#', uploadedAt: '2024-01-15' },
    { id: 'asset-3', name: 'brief_proyecto.pdf', type: 'documento', url: '#', uploadedAt: '2024-01-10' },
  ],
  'proj-4': [
     { id: 'asset-4', name: 'logo_blog.svg', type: 'logo', url: '#', uploadedAt: '2024-02-16' },
  ]
};