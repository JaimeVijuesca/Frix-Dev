'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Code } from 'lucide-react';
import { Logo } from './logo';
import { UserNav } from './user-nav';
import { useState, useEffect } from 'react';


const navLinks = [
  { href: '#services', label: 'Servicios' },
  { href: '#portfolio', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  // Mock authentication state. In a real app, you'd use a context or session.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 p-4">
                <Logo />
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* You can add a search bar here if needed */}
          </div>
          <nav className="hidden md:flex md:gap-4">
            {navLinks.map((link) => (
              <Button key={link.href} variant="link" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
          {/* <div className="flex items-center gap-2">
             {isClient && (isAuthenticated ? (
                <UserNav />
             ) : (
                <Button asChild>
                    <Link href="/login">Iniciar Sesión</Link>
                </Button>
            ))}
          </div> */}
        </div>
      </div>
    </header>
  );
}
