import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import { projects, clients, users } from '../../../../lib/data';
import { notFound } from 'next/navigation';
import { ProjectsTable } from '../../../../components/dashboard/projects-table';

export default function AdminProjectsPage() {
  // In a real app, you'd check role from session/context
  const user = users['admin1'];
  if (user.role !== 'admin') {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestión de Proyectos</CardTitle>
        <CardDescription>
          Visualiza y gestiona todos los proyectos de los clientes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectsTable projects={projects} clients={clients} userRole="admin" />
      </CardContent>
    </Card>
  );
}
