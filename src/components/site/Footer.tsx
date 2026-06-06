import { Instagram, Truck, CreditCard, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="envios" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <p className="font-display text-xl font-semibold">VITTA<span className="text-primary"> PIEL</span></p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Skincare consciente formulado con ingredientes activos. Hecho con cariño en Venezuela.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:bg-secondary"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-medium"><Truck className="size-4 text-primary" /> Envíos</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>Entrega local (Caracas) en 24h</li>
            <li>Delivery nacional 2–5 días</li>
            <li>Retiro gratis en tienda</li>
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-medium"><CreditCard className="size-4 text-primary" /> Pagos</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>Zelle (USD)</li>
            <li>Pago Móvil</li>
            <li>Transferencia Bancaria VE</li>
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-2 font-medium"><MapPin className="size-4 text-primary" /> Ubicación</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>Caracas, Venezuela</li>
            <li>Lun – Sáb · 9:00 a 18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VITTA PIEL · Todos los derechos reservados.
      </div>
    </footer>
  );
}