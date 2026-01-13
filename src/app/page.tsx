import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

import ContactForm from "../components/contact-form";
import { PlaceHolderImages } from "../lib/placeholder-images";
import { services, portfolio, processSteps } from "../lib/data";
import {Check, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NextJsLogo, TailwindCssLogo, VercelLogo } from "../components/tech-logos";
import type { Metadata } from 'next';

// import { AiIdeaGenerator } from "../components/ai-idea-generator";

export const metadata: Metadata = {
  title: 'Desarrollo Web Profesional para Negocios',
  description:
    'Diseño y desarrollo de páginas web rápidas, modernas y optimizadas para SEO. Ideal para negocios, emprendedores y pequeñas empresas.',
  openGraph: {
    title: 'Desarrollo Web Profesional | Frix Dev',
    description:
      'Creamos sitios web rápidos y profesionales con Next.js. Aumenta tu presencia online y consigue más clientes.',
    url: 'https://frix-dev.vercel.app',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  FIX 
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                   Soy desarrollador web freelance. Creo páginas rápidas y claras para
emprendedores y negocios pequeños que necesitan empezar en internet.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Hablamos sin compromiso</Link>
                  </Button>
                </div>
              </div>
              <Image
                src={PlaceHolderImages[0].imageUrl}
                width={600}
                height={400}
                alt="Hero"
                data-ai-hint={PlaceHolderImages[0].imageHint}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last border-4 border-indigo-500"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Tecnología moderna y fiable</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                           Uso herramientas actuales para que la web cargue rápido y funcione bien,
sin que tengas que preocuparte por lo técnico.
                        </p>  
          </div>
        </section>
{/*         
        <section id="ai-generator" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm text-primary">Prueba nuestra IA</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Genera una Idea para tu Web</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        ¿No sabes por dónde empezar? Describe tu negocio o proyecto y deja que nuestra IA te dé un punto de partida para tu nueva web.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-2xl mt-12">
              <AiIdeaGenerator />
            </div>
          </div>
        </section> */}

    
                   
                       
      

        {/* <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm">Proceso de Trabajo</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Proceso de Desarrollo Web</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestro proceso está diseñado para ser eficiente y colaborativo, asegurando que obtengas el sitio web que deseas sin complicaciones.
                </p>
              </div>
            </div>
            <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-4 hidden lg:block" />
                {processSteps.map((step, index) => (
                    <div key={step.title} className="relative flex flex-col items-center text-center">
                         <div className="absolute -top-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10">{index + 1}</div>
                         <step.icon className="h-12 w-12 text-primary mb-4" />
                         <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                         <p className="text-muted-foreground">{step.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section> */}

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
          Proyectos de muestra
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
          Proyectos de Desarrollo Web
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Ejemplos de sitios web que puedo crear para pequeños negocios y emprendedores.
          Diseños modernos, rápidos y pensados para convertir visitantes en clientes.
        </p>
      </div>
    </div>
    <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
      {portfolio.map((item) => (
        <Card key={item.title} className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src={item.imageUrl}
              width={600}
              height={400}
              alt={item.title}
              data-ai-hint={item.imageHint}
              className="aspect-video object-cover"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="font-headline">
              {item.title} <span className="text-sm text-muted-foreground">(demo)</span>
            </CardTitle>
            <CardDescription className="mt-2">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm">Precios orientativos</div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estos precios son orientativos. Cada proyecto es distinto y prefiero
hablar contigo antes de darte un presupuesto final.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Landing Page Básica</CardTitle>
                  <CardDescription>Ideal para empezar o promocionar un producto.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">10-20 €</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />1 página</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Diseño responsive</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Formulario de contacto</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Imágenes/logos</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full"><Link href="#contact">Empezar</Link></Button>
                </CardFooter>
              </Card>
              <Card className="border-primary border-2 relative">
                 <div className="absolute top-0 right-4 -mt-3 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">Popular</div>
                <CardHeader>
                  <CardTitle className="font-headline">Web Corporativa</CardTitle>
                  <CardDescription>Muestra tu negocio al mundo de forma profesional.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">30-50 €</div>
                   <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />3-5 secciones</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Diseño responsive</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Formulario de contacto</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Google Maps básico</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full"><Link href="#contact">Elegir Plan</Link></Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Web Dinámica Básica</CardTitle>
                  <CardDescription>Para proyectos que necesitan más interacción.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">70-100 €</div>
                   <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Todo lo de Web Corporativa</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Galería de imágenes</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Integración newsletter</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full"><Link href="#contact">Solicitar</Link></Button>
                </CardFooter>
              </Card>
            </div>
             <div className="mt-8 text-center text-muted-foreground">
                <p>Mantenimiento opcional: desde 5-10 €/mes</p>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Contacta con Nosotros</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ¿Listo para empezar tu proyecto? Rellena el formulario y nos pondremos en contacto contigo.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
             <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
