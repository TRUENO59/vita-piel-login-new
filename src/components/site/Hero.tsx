import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/RostroTuPiel-03.png";
import hero2 from "@/assets/Rostro_Serum-04.png";
import hero3 from "@/assets/RostroHidratacion-03.png";

const slides = [
  { img: hero1, title: "Tu piel, en su mejor versión", sub: "Sérums activos con resultados visibles desde la primera semana." },
  { img: hero2, title: "Hidratación que se siente", sub: "Cremas formuladas con activos naturales y ciencia coreana." },
  { img: hero3, title: "Rituales de belleza diaria", sub: "Tónicos, limpiadores y contornos para una rutina completa." },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="hero-gradient relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div key={i} className="animate-fade-up">
          <span className="inline-flex rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            Skincare consciente
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {slides[i].title}
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">{slides[i].sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#catalogo">Ver catálogo</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#contacto">Hablar por WhatsApp</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {slides.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Slide ${n + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === n ? "w-8 bg-foreground" : "w-4 bg-foreground/30"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border/50 bg-card shadow-2xl">
            <img
              key={i}
              src={slides[i].img}
              alt={slides[i].title}
              width={1600}
              height={900}
              className="h-full w-full animate-fade-up object-cover"
            />
          </div>
          <button
            onClick={() => setI((n) => (n - 1 + slides.length) % slides.length)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 backdrop-blur-md transition-all hover:scale-110"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={() => setI((n) => (n + 1) % slides.length)}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 backdrop-blur-md transition-all hover:scale-110"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}