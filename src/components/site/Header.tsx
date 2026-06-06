import { Moon, Sun, Search, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PALETTES, useTheme } from "@/lib/theme";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  onOpenInventory: () => void;
};

export function Header({ search, setSearch, onOpenInventory }: Props) {
  const { palette, setPalette, mode, toggleMode } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:gap-6 md:px-6">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight md:text-2xl">
          VITTA<span className="text-primary">PIEL</span>
        </a>
        <nav className="hidden flex-1 items-center gap-6 text-sm text-muted-foreground lg:flex">
          <a href="#catalogo" className="transition-colors hover:text-foreground">Catálogo</a>
          <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          <a href="#envios" className="transition-colors hover:text-foreground">Envíos</a>
        </nav>

        <div className="relative ml-auto flex-1 lg:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos..."
            className="h-10 w-full rounded-full border border-input bg-secondary/60 pl-9 pr-4 text-sm outline-none transition-all focus:border-ring focus:bg-background"
          />
        </div>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 rounded-full border border-border bg-secondary/60 p-1 md:flex">
            {PALETTES.map((p) => (
              <button
                key={p.id}
                onClick={() => setPalette(p.id)}
                aria-label={`Paleta ${p.name}`}
                title={p.name}
                className={`size-6 rounded-full transition-all ${
                  palette === p.id ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "hover:scale-110"
                }`}
                style={{ backgroundColor: p.swatch }}
              />
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={toggleMode} aria-label="Cambiar tema">
            {mode === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={onOpenInventory} aria-label="Inventario">
            <Package className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}