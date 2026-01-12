import { Badge } from '../../../../components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import { projects, projectAssets } from '../../../../lib/data';
import { notFound } from 'next/navigation';
import { FileUpload } from '../../../../components/dashboard/file-upload';

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);
  const assets = projectAssets[params.id] || [];

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-headline">{project.name}</h1>
          <p className="text-muted-foreground">ID del proyecto: {project.id}</p>
        </div>
        <Badge
          variant={
            project.status === 'entregado'
              ? 'default'
              : project.status === 'en progreso'
              ? 'secondary'
              : 'outline'
          }
           className={`text-sm ${project.status === 'entregado' ? 'bg-green-600 text-white' : ''}`}
        >
          {project.status}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detalles del Proyecto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{project.details}</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Fecha de Creación</p>
              <p className="text-muted-foreground">{project.createdAt}</p>
            </div>
            <div>
              <p className="font-medium">Última Actualización</p>
              <p className="text-muted-foreground">{project.updatedAt}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <FileUpload initialAssets={assets} />
    </div>
  );
}
