import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table';
import { clients, users } from '../../../../lib/data';
import { notFound } from 'next/navigation';
import { Button } from '../../../../components/ui/button';

export default function AdminClientsPage() {
    // In a real app, you'd check role from session/context
    const user = users['admin1'];
    if (user.role !== 'admin') {
        notFound();
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestión de Clientes</CardTitle>
        <CardDescription>
          Visualiza y gestiona todos los clientes de Frix.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Compañía</TableHead>
              <TableHead>
                <span className="sr-only">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.company}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
