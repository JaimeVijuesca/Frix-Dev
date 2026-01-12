'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { users } from '../../lib/data';

// In a real app, you'd get the user from session/context
const user = users['client1'];
// const user = users['admin1']; // Uncomment to test admin view

const clientNavItems = [
  { href: '/dashboard', label: 'Resumen', icon: LayoutDashboard },
  { href: '/dashboard/projects', label: 'Mis Proyectos', icon: FolderKanban },
  { href: '/dashboard/settings', label: 'Ajustes', icon: Settings },
];

const adminNavItems = [
  { href: '/dashboard/admin/projects', label: 'Proyectos', icon: FolderKanban },
  { href: '/dashboard/admin/clients', label: 'Clientes', icon: Users },
  { href: '/dashboard/settings', label: 'Ajustes', icon: Settings },
];

export function DashboardNav() {
  const pathname = usePathname();
  const navItems = user.role === 'admin' ? adminNavItems : clientNavItems;

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <span
            className={cn(
              'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
              pathname === item.href ? 'bg-accent' : 'transparent'
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.label}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
