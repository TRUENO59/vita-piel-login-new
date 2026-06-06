import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Catalog } from "@/components/site/Catalog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { InventoryDrawer } from "@/components/site/InventoryDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VITTA PIEL · Skincare consciente" },
      {
        name: "description",
        content: "Tienda de skincare con sérums, cremas, tónicos y más. Precios en USD. Envíos en Venezuela.",
      },
      { property: "og:title", content: "VITTA PIEL · Skincare consciente" },
      {
        property: "og:description",
        content: "Tienda de skincare con sérums, cremas, tónicos y más. Precios en USD. Envíos en Venezuela.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [search, setSearch] = useState("");
  const [inv, setInv] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header search={search} setSearch={setSearch} onOpenInventory={() => setInv(true)} />
      <main>
        <Hero />
        <Catalog search={search} />
        <Contact />
      </main>
      <Footer />
      <InventoryDrawer open={inv} onOpenChange={setInv} />
    </div>
  );
}
