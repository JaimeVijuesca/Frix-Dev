import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { Badge } from '../../components/ui/badge';
import { projects, users } from '../../lib/data';
import { Activity, CheckCircle, Clock, FolderKanban } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function ClientDashboardPage() {
  // In a real app, get user from session/context
  const user = users['client1'];
  const userProjects = projects.filter((p) => p.clientId === user.id.replace('user-', 'client-'));

  const inProgressCount = userProjects.filter((p) => p.status === 'en progreso').length;
  const completedCount = userProjects.filter((p) => p.status === 'entregado').length;
  const recentProjects = userProjects.slice(0, 5);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Proyectos Totales</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userProjects.length}</div>
            <p className="text-xs text-muted-foreground">
              Total de proyectos con Frix
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Progreso</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressCount}</div>
            <p className="text-xs text-muted-foreground">
              Proyectos activos actualmente
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completados</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCount}</div>
            <p className="text-xs text-muted-foreground">
              Proyectos finalizados y entregados
            </p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Proyectos Recientes</CardTitle>
            <CardDescription>
              Un vistazo a tus proyectos más recientes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Última Actualización</TableHead>
                  <TableHead>
                    <span className="sr-only">Acciones</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>
                      <Badge variant={
                          project.status === 'entregado' ? 'default'
                          : project.status === 'en progreso' ? 'secondary'
                          : 'outline'
                        }
                        className={project.status === 'entregado' ? 'bg-green-600' : ''}
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{project.updatedAt}</TableCell>
                    <TableCell>
                       <Button asChild variant="outline" size="sm">
                          <Link href={`/dashboard/projects/${project.id}`}>Ver detalles</Link>
                       </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
