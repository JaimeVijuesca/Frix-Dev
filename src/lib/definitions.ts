import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProcessStep = {
    icon: LucideIcon;
    title: string;
    description: string;
}

export type PortfolioItem = {
    imageUrl: string;
    imageHint: string;
    title: string;
    description: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    role: 'client' | 'admin';
};

export type Client = {
    id: string;
    name: string;
    email: string;
    company: string;
};

export type Project = {
    id: string;
    name: string;
    clientId: string;
    status: 'pendiente' | 'en progreso' | 'entregado';
    createdAt: string;
    updatedAt: string;
    details: string;
};

export type Asset = {
  id: string;
  name: string;
  type: 'logo' | 'imagen' | 'documento';
  url: string;
  uploadedAt: string;
};
