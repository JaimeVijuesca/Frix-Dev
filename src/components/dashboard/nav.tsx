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
import { motion } from 'framer-motion';

const user = users['client1'];

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
    <motion.nav
      className="grid items-start gap-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link href={item.href}>
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  isActive && 'bg-accent'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </motion.span>
            </Link>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}
