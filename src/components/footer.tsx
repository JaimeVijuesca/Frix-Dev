import { Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <div className="text-center text-sm text-muted-foreground md:text-left">
            <p>© {new Date().getFullYear()} Frix. Todos los derechos reservados.</p>
            <p>
              Hecho con ❤️ usando Next.js, Tailwind CSS y alojado en Vercel.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
