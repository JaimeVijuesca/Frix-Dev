import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

import ContactForm from "../components/contact-form";
import { PlaceHolderImages } from "../lib/placeholder-images";
import { services, portfolio, processSteps } from "../lib/data";
import { BrainCircuit, CheckCircle, Code, Mail, Send, Bot, Sparkles, Check, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NextJsLogo, TailwindCssLogo, VercelLogo } from "../components/tech-logos";
// import { AiIdeaGenerator } from "../components/ai-idea-generator";


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
                    Sitios Web Rápidos y Profesionales para tu Negocio
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    En Frix, transformamos tus ideas en sitios web de alto rendimiento. Simplicidad, velocidad y diseño a tu alcance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Solicita tu Web</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#services">Nuestros Servicios</Link>
                  </Button>
                </div>
              </div>
              <Image
                src={PlaceHolderImages[0].imageUrl}
                width={600}
                height={400}
                alt="Hero"
                data-ai-hint={PlaceHolderImages[0].imageHint}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Nuestros Servicios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Qué Hacemos por Ti</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos soluciones web integrales, desde páginas de presentación hasta tiendas online, siempre con un enfoque en la calidad y la velocidad.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full p-3">
                         <service.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="font-headline">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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

        <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Nuestro Stack Tecnológico</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Construido con las Mejores Herramientas</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Utilizamos un stack de tecnologías moderno y de alto rendimiento para garantizar que tu sitio web sea rápido, escalable y robusto.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-3 md:gap-12 mt-12">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <NextJsLogo className="h-20 w-20" />
                        <h3 className="text-lg font-bold">Next.js</h3>
                        <p className="text-sm text-muted-foreground">Framework de React para producción.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <TailwindCssLogo className="h-20 w-20" />
                        <h3 className="text-lg font-bold">Tailwind CSS</h3>
                        <p className="text-sm text-muted-foreground">Framework CSS utility-first.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <VercelLogo className="h-20 w-20" />
                        <h3 className="text-lg font-bold">Vercel</h3>
                        <p className="text-sm text-muted-foreground">Plataforma de despliegue optimizada.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm">Proceso de Trabajo</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Rápido, Sencillo y Transparente</h2>
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
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Nuestro Trabajo</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Proyectos Destacados</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Echa un vistazo a algunos de los sitios web que hemos creado para pequeños negocios.
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
                    <CardTitle className="font-headline">{item.title}</CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
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
                <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm">Precios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">¡Tu web profesional desde solo 10 €!</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sabemos que empezar puede dar miedo, así que creamos un prototipo gratuito: te mostramos cómo será tu web antes de pagar. Con nosotros obtienes diseño adaptado a tu negocio, una experiencia de usuario clara y apoyo en todo el proceso.
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
