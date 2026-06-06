import { useMemo, useState, useRef, useEffect } from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { useInventory } from "@/hooks/use-inventory";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WHATSAPP = "584141234567";

export function Catalog({ search }: { search: string }) {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[number] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { stock } = useInventory();

  const products = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCat = cat === "Todos" || p.category === cat;
      const matchQ =
        !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [cat, search]);

  const handleSelectProduct = (p: typeof PRODUCTS[number]) => {
    setSelectedProduct(p);
    setActiveImageIndex(0);
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
    setActiveImageIndex(0);
  };

  const s = selectedProduct ? (stock[selectedProduct.id] ?? selectedProduct.stock) : 0;
  const msg = selectedProduct
    ? encodeURIComponent(
        `Hola VITTA PIEL, me interesa el producto "${selectedProduct.name}" ($${selectedProduct.price} USD).`,
      )
    : "";

  const images = selectedProduct?.images ?? [];
  const hasMultipleImages = images.length > 1;
  const galleryRef = useRef<HTMLDivElement>(null);

  const prevImage = () => setActiveImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () => setActiveImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  // Swipe handling for mobile gallery
  useEffect(() => {
    const el = galleryRef.current;
    if (!el || !hasMultipleImages) return;

    let startX = 0;
    let startY = 0;
    let isSwiping = false;
    const threshold = 50;

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isSwiping = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isSwiping) return;
      const touch = e.touches[0];
      const diffX = touch.clientX - startX;
      const diffY = touch.clientY - startY;

      // Prevent vertical scroll if horizontal swipe is dominant
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isSwiping) return;
      isSwiping = false;
      const touch = e.changedTouches[0];
      const diffX = touch.clientX - startX;

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          prevImage();
        } else {
          nextImage();
        }
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [hasMultipleImages, images.length]);

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Colección</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Catálogo VITTA
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Productos seleccionados con ingredientes activos comprobados. Precios en USD.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
              cat === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary/40 text-muted-foreground hover:bg-secondary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {products.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">No encontramos productos. Prueba otra búsqueda.</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const productStock = stock[p.id] ?? p.stock;
            const waMsg = encodeURIComponent(
              `Hola VITTA PIEL, me interesa el producto "${p.name}" ($${p.price} USD).`,
            );
            return (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="relative aspect-square overflow-hidden bg-secondary cursor-pointer"
                  onClick={() => handleSelectProduct(p)}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] uppercase tracking-wider text-foreground backdrop-blur">
                    {p.category}
                  </span>
                  {productStock === 0 && (
                    <span className="absolute right-3 top-3 rounded-full bg-destructive px-2.5 py-1 text-[10px] uppercase tracking-wider text-destructive-foreground">
                      Agotado
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="font-display text-2xl font-semibold text-primary">${p.price}</span>
                    <span className="text-xs text-muted-foreground">{productStock} disponibles</span>
                  </div>
                  <Button
                    asChild
                    disabled={productStock === 0}
                    className="mt-4 w-full rounded-full"
                    variant={productStock === 0 ? "secondary" : "default"}
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="mr-1 size-4" />
                      {productStock === 0 ? "Avísame" : "Pedir por WhatsApp"}
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && handleCloseDialog()}>
        {selectedProduct && (
          <DialogContent className="max-w-2xl overflow-hidden p-0 sm:rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Gallery */}
              <div ref={galleryRef} className="relative overflow-hidden bg-secondary touch-pan-y">
                <div className="relative aspect-square">
                  <img
                    src={images[activeImageIndex]}
                    alt={`${selectedProduct.name} - foto ${activeImageIndex + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] uppercase tracking-wider text-foreground backdrop-blur">
                    {selectedProduct.category}
                  </span>
                  {s === 0 && (
                    <span className="absolute right-3 top-3 rounded-full bg-destructive px-2.5 py-1 text-[10px] uppercase tracking-wider text-destructive-foreground">
                      Agotado
                    </span>
                  )}

                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur transition hover:bg-background"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="size-5 text-foreground" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur transition hover:bg-background"
                        aria-label="Imagen siguiente"
                      >
                        <ChevronRight className="size-5 text-foreground" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {hasMultipleImages && (
                  <div className="flex gap-2 p-3">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative aspect-square w-16 overflow-hidden rounded-lg border-2 transition ${
                          idx === activeImageIndex
                            ? "border-primary"
                            : "border-transparent hover:border-muted-foreground/30"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${selectedProduct.name} miniatura ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between p-6">
                <div>
                  <DialogHeader className="text-left">
                    <DialogTitle className="font-display text-2xl font-semibold leading-tight">
                      {selectedProduct.name}
                    </DialogTitle>
                    <DialogDescription className="mt-2 text-sm text-muted-foreground">
                      {selectedProduct.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Categoría</span>
                      <span className="font-medium">{selectedProduct.category}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Precio</span>
                      <span className="font-display text-xl font-semibold text-primary">
                        ${selectedProduct.price} USD
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Disponibilidad</span>
                      <span className={s === 0 ? "text-destructive font-medium" : "text-green-600 font-medium"}>
                        {s === 0 ? "Agotado" : `${s} en stock`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-muted-foreground">Envíos</span>
                      <span className="font-medium">A todo Venezuela</span>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  disabled={s === 0}
                  className="mt-6 w-full rounded-full"
                  variant={s === 0 ? "secondary" : "default"}
                >
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${msg}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="mr-1 size-4" />
                    {s === 0 ? "Avísame cuando vuelva" : "Pedir por WhatsApp"}
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
