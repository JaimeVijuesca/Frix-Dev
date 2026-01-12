import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Badge } from '../ui/badge';
import type { Project, Client } from '../../lib/definitions';
import { Button } from '../ui/button';
import Link from 'next/link';

type ProjectsTableProps = {
  projects: Project[];
  clients?: Client[];
  userRole: 'admin' | 'client';
};

export function ProjectsTable({ projects, clients, userRole }: ProjectsTableProps) {
  const getClientName = (clientId: string) => {
    return clients?.find((c) => c.id === clientId)?.name || 'N/A';
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre del Proyecto</TableHead>
          {userRole === 'admin' && <TableHead>Cliente</TableHead>}
          <TableHead>Estado</TableHead>
          <TableHead>Última Actualización</TableHead>
          <TableHead>
            <span className="sr-only">Acciones</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium">{project.name}</TableCell>
            {userRole === 'admin' && (
              <TableCell>{getClientName(project.clientId)}</TableCell>
            )}
            <TableCell>
              <Badge
                variant={
                  project.status === 'entregado' ? 'default'
                  : project.status === 'en progreso' ? 'secondary'
                  : 'outline'
                }
                className={project.status === 'entregado' ? 'bg-green-600 text-white' : ''}
              >
                {project.status}
              </Badge>
            </TableCell>
            <TableCell>{project.updatedAt}</TableCell>
            <TableCell className="text-right">
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/projects/${project.id}`}>Ver detalles</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
