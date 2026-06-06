import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/products";
import { useInventory } from "@/hooks/use-inventory";

export function InventoryDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { stock, update, reset } = useInventory();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Inventario</SheetTitle>
          <SheetDescription>
            Ajusta el stock de cada producto. Se guarda automáticamente.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-3 px-4">
          {PRODUCTS.map((p) => {
            const q = stock[p.id] ?? p.stock;
            return (
              <div key={p.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <img src={p.image} alt={p.name} className="size-14 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium">{p.name}</p>
                  <p className="text-xs text-muted-foreground">${p.price} USD</p>
                </div>
                <div className="flex items-center gap-1">
                  <Button size="icon" variant="outline" className="size-8" onClick={() => update(p.id, q - 1)}>
                    -
                  </Button>
                  <input
                    type="number"
                    value={q}
                    onChange={(e) => update(p.id, parseInt(e.target.value || "0"))}
                    className="h-8 w-14 rounded-md border border-input bg-background text-center text-sm"
                  />
                  <Button size="icon" variant="outline" className="size-8" onClick={() => update(p.id, q + 1)}>
                    +
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 px-4">
          <Button variant="outline" className="w-full" onClick={reset}>
            Restablecer stock inicial
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}