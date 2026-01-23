import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import ContactForm from "../components/contact-form";
import { portfolio } from "../lib/data";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño y Desarrollo Web Profesional para Negocios | Frix",
  description:
    "Diseño y desarrollo de páginas web rápidas, profesionales y optimizadas para SEO. Especializado en pequeños negocios y emprendedores. Presupuesto sin compromiso.",
  openGraph: {
    title: "Diseño Web Profesional para Negocios | Frix",
    description:
      "Creamos páginas web rápidas, modernas y optimizadas para convertir visitas en clientes. Especialistas en pequeños negocios.",
    url: "https://frix-dev.vercel.app",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">

        {/* HERO */}
        <section id="hero" className="w-full min-h-screen flex items-center bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <span className="text-indigo-600 font-bold tracking-widest text-sm uppercase">
              Frix · Desarrollo Web
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-headline">
              Diseño y Desarrollo Web Profesional para Pequeños Negocios
            </h1>

            <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
              Webs rápidas, modernas y optimizadas para convertir visitas en clientes
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
              Soy desarrollador web freelance especializado en crear páginas web claras, rápidas y optimizadas para SEO. Ayudo a emprendedores y pequeños negocios a tener una web profesional con la que empezar fuerte en internet.
            </p>

            <div className="mt-10 flex justify-center">
              <Button asChild size="lg">
                <Link
                  href="#contact"
                  className="px-8 py-4 text-lg font-semibold rounded-lg bg-indigo-600 text-white shadow-lg transition-all hover:scale-105 hover:bg-indigo-500"
                >
                  Solicitar presupuesto sin compromiso
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="services" className="w-full py-16 md:py-28">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Tecnología moderna para diseño web rápido y profesional
            </h2>
            <p className="mt-6 max-w-[900px] text-muted-foreground md:text-xl leading-relaxed">
              Desarrollo páginas web optimizadas para rendimiento, experiencia de usuario y posicionamiento en Google. Me encargo de toda la parte técnica para que tú solo te preocupes de tu negocio.
            </p>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="w-full py-16 md:py-28 bg-card">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Proyectos de Desarrollo Web
            </h2>
            <p className="mt-4 max-w-[900px] mx-auto text-muted-foreground md:text-xl">
              Ejemplos de páginas web orientadas a negocios reales: webs corporativas, landing pages y sitios optimizados para captar clientes.
            </p>

            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {portfolio.map((item) => (
                <Card key={item.title} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={item.imageUrl}
                      width={600}
                      height={400}
                      alt={item.title}
                      className="aspect-video object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline">{item.title} <span className="text-sm text-muted-foreground">(demo)</span></CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIOS */}
        <section id="pricing" className="w-full py-16 md:py-28 bg-secondary/50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Precios orientativos de diseño web
            </h2>
            <p className="mt-4 max-w-[900px] mx-auto text-muted-foreground md:text-xl">
              Cada proyecto es diferente. El presupuesto final se ajusta según las necesidades de tu negocio.
            </p>

            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">

              {/* LANDING */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Landing Page Profesional</CardTitle>
                  <CardDescription>Ideal para presentar tu negocio o un servicio concreto.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">150 – 300 €</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />1 página optimizada</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Diseño responsive</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Formulario de contacto</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full"><Link href="#contact">Solicitar presupuesto</Link></Button>
                </CardFooter>
              </Card>

              {/* CORPORATIVA */}
              <Card className="border-primary border-2 relative">
                <div className="absolute top-0 right-4 -mt-3 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">Más solicitado</div>
                <CardHeader>
                  <CardTitle className="font-headline">Web Corporativa</CardTitle>
                  <CardDescription>Presencia profesional para tu empresa.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">350 – 600 €</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />3–5 secciones</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Formulario de contacto</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Google Maps</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full"><Link href="#contact">Elegir plan</Link></Button>
                </CardFooter>
              </Card>

              {/* DINÁMICA */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Web Dinámica Básica</CardTitle>
                  <CardDescription>Proyectos con más interacción.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">600 – 1.000 €</div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Galería de imágenes</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />Integraciones básicas</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full"><Link href="#contact">Consultar</Link></Button>
                </CardFooter>
              </Card>

            </div>
            <p className="mt-8 text-muted-foreground">Mantenimiento opcional: desde 15 – 40 €/mes</p>
          </div>
        </section>

        {/* FAQ con JSON-LD */}
        <section id="faq" className="w-full py-16 md:py-28 bg-secondary/50">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-center">
              Preguntas frecuentes sobre diseño web
            </h2>

            <div className="mt-12 space-y-8">
              {[
                {
                  question: "¿Cuánto cuesta una página web profesional?",
                  answer: "El precio de una página web profesional depende del tipo de proyecto, número de secciones y funcionalidades. Para pequeños negocios suele situarse entre 300 y 600 euros."
                },
                {
                  question: "¿Qué incluye una web corporativa?",
                  answer: "Una web corporativa incluye secciones como inicio, servicios, sobre nosotros y contacto, además de diseño responsive y estructura optimizada para buscadores."
                },
                {
                  question: "¿Cuánto tiempo se tarda en desarrollar una web?",
                  answer: "Una web sencilla puede estar lista en pocos días, mientras que proyectos más completos pueden tardar entre una y dos semanas."
                },
                {
                  question: "¿Las páginas web están optimizadas para móviles?",
                  answer: "Sí, todas las páginas web se desarrollan con diseño responsive y se adaptan a móviles, tablets y ordenadores."
                },
                {
                  question: "¿Ofreces mantenimiento web?",
                  answer: "Sí, ofrezco un servicio de mantenimiento web opcional con actualizaciones, soporte técnico y corrección de errores."
                }
              ].map((faq, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "¿Cuánto cuesta una página web profesional?",
                      acceptedAnswer: { "@type": "Answer", text: "El precio de una página web profesional depende del tipo de proyecto, número de secciones y funcionalidades. Para pequeños negocios suele situarse entre 300 y 600 euros." }
                    },
                    {
                      "@type": "Question",
                      name: "¿Qué incluye una web corporativa?",
                      acceptedAnswer: { "@type": "Answer", text: "Una web corporativa incluye secciones como inicio, servicios, sobre nosotros y contacto, además de diseño responsive y estructura optimizada para buscadores." }
                    },
                    {
                      "@type": "Question",
                      name: "¿Cuánto tiempo se tarda en desarrollar una web?",
                      acceptedAnswer: { "@type": "Answer", text: "Una web sencilla puede estar lista en pocos días, mientras que proyectos más completos pueden tardar entre una y dos semanas." }
                    },
                    {
                      "@type": "Question",
                      name: "¿Las páginas web están optimizadas para móviles?",
                      acceptedAnswer: { "@type": "Answer", text: "Sí, todas las páginas web se desarrollan con diseño responsive y se adaptan a móviles, tablets y ordenadores." }
                    },
                    {
                      "@type": "Question",
                      name: "¿Ofreces mantenimiento web?",
                      acceptedAnswer: { "@type": "Answer", text: "Sí, ofrezco un servicio de mantenimiento web opcional con actualizaciones, soporte técnico y corrección de errores." }
                    }
                  ]
                })
              }}
            />
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contact" className="w-full py-16 md:py-28 bg-card">
          <div className="container text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">
              Contacta con tu desarrollador web
            </h2>
            <p className="mt-4 mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Cuéntame tu proyecto a través del formulario de contacto y te responderé con una propuesta clara y sin compromiso.
            </p>

            <div className="mx-auto w-full max-w-sm mt-8">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
