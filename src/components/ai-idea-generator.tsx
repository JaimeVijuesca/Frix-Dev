// 'use client';

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// // import { generateWebsiteIdea } from '../ai/flows/website-idea-flow';
// import { type WebsiteIdeaOutput } from '../ai/schemas';
// import { Button } from './ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
// import { Textarea } from './ui/textarea';
// import { Loader2, Lightbulb, Sparkles, Wand2, Palette, Target, Megaphone } from 'lucide-react';
// import { Skeleton } from './ui/skeleton';

// const formSchema = z.object({
//   businessDescription: z.string().min(10, {
//     message: 'Por favor, introduce al menos 10 caracteres.',
//   }).max(500, {
//     message: 'La descripción no puede superar los 500 caracteres.'
//   }),
// });

// export function AiIdeaGenerator() {
//   const [idea, setIdea] = useState<WebsiteIdeaOutput | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       businessDescription: '',
//     },
//   });

//   // async function onSubmit(values: z.infer<typeof formSchema>) {
//   //   setIsLoading(true);
//   //   setError(null);
//   //   setIdea(null);
//   //   try {
//   //     const result = await generateWebsiteIdea(values);
//   //     setIdea(result);
//   //   } catch (e) {
//   //     console.error(e);
//   //     setError('Ha ocurrido un error al generar la idea. Por favor, inténtalo de nuevo.');
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // }
  
//   const IdeaSkeleton = () => (
//     <Card className="mt-6 bg-background">
//       <CardHeader>
//         <Skeleton className="h-8 w-3/4" />
//         <Skeleton className="h-4 w-full mt-2" />
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div>
//           <Skeleton className="h-5 w-1/3 mb-2"/>
//           <Skeleton className="h-4 w-4/5" />
//         </div>
//         <div>
//             <Skeleton className="h-5 w-1/4 mb-3"/>
//             <ul className="space-y-3">
//                 <li className="flex items-start gap-3">
//                   <Skeleton className="h-6 w-6 rounded-full" />
//                   <Skeleton className="h-6 w-2/3" />
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Skeleton className="h-6 w-6 rounded-full" />
//                   <Skeleton className="h-6 w-1/2" />
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <Skeleton className="h-6 w-6 rounded-full" />
//                   <Skeleton className="h-6 w-3/5" />
//                 </li>
//             </ul>
//         </div>
//          <div>
//           <Skeleton className="h-5 w-1/3 mb-2"/>
//           <div className="flex gap-4 items-center">
//             <Skeleton className="h-10 w-10 rounded-full" />
//             <Skeleton className="h-10 w-10 rounded-full" />
//             <Skeleton className="h-4 w-1/2" />
//           </div>
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Skeleton className="h-10 w-1/3"/>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <Card className="w-full">
//       {/* <CardContent className="p-6">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="businessDescription"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-lg">Describe tu Negocio</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Ej: 'Una cafetería de especialidad en el centro de la ciudad que también vende granos de café online.'"
//                       className="resize-none"
//                       rows={4}
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )} */}
//             {/* /> */}
//             <Button type="submit" disabled={isLoading} className="w-full">
//               {isLoading ? (
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               ) : (
//                 <Wand2 className="mr-2 h-4 w-4" />
//               )}
//               Generar Idea
//             </Button>
//           </form>
//         </Form>

//         {isLoading && <IdeaSkeleton />}

//         {error && <p className="mt-4 text-center text-destructive">{error}</p>}

//         {idea && (
//           <Card className="mt-6 bg-background animate-in fade-in-50 duration-500">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 font-headline">
//                 <Lightbulb className="h-6 w-6 text-primary" />
//                 {idea.title}
//               </CardTitle>
//               <CardDescription>{idea.heroText}</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-6">
//                <div>
//                 <h4 className="font-semibold text-muted-foreground flex items-center gap-2 mb-1"><Target className="h-4 w-4 text-accent"/>Propuesta de Valor</h4>
//                 <p className="text-sm">{idea.valueProposition}</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-muted-foreground mb-2">Características Clave</h4>
//                 <ul className="space-y-2 text-muted-foreground">
//                   {idea.features.map((feature, index) => (
//                       <li key={index} className="flex items-start gap-2">
//                           <Sparkles className="h-4 w-4 mt-1 shrink-0 text-accent" />
//                           <span>{feature}</span>
//                       </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2 mb-2"><Palette className="h-4 w-4 text-accent"/>Paleta de Colores Sugerida</h4>
//                  <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-2">
//                         <div className="h-8 w-8 rounded-full border" style={{ backgroundColor: `hsl(${idea.colorPalette.primary})`}} />
//                         <div className="h-8 w-8 rounded-full border" style={{ backgroundColor: `hsl(${idea.colorPalette.accent})`}} />
//                     </div>
//                     <p className="text-sm text-muted-foreground">{idea.colorPalette.description}</p>
//                  </div>
//               </div>
//             </CardContent>
//              <CardFooter className="flex-col items-start gap-2">
//                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2 mb-1"><Megaphone className="h-4 w-4 text-accent"/>Llamada a la Acción</h4>
//                 <Button>{idea.callToAction}</Button>
//             </CardFooter>
//           </Card>
//         )}
//       </CardContent>
//     </Card>
//   );
// }
