import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { projects, users } from '../../../lib/data';
import { ProjectsTable } from '../../../components/dashboard/projects-table';

export default function ClientProjectsPage() {
  // In a real app, get user from session/context
  const user = users['client1'];
  const userProjects = projects.filter((p) => p.clientId === user.id.replace('user-', 'client-'));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mis Proyectos</CardTitle>
        <CardDescription>
          Aquí puedes ver todos tus proyectos y su estado actual.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectsTable projects={userProjects} userRole="client" />
      </CardContent>
    </Card>
  );
}
