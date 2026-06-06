import { useEffect, useState } from "react";
import { PRODUCTS } from "@/lib/products";

const KEY = "vp-stock";

export function useInventory() {
  const [stock, setStock] = useState<Record<string, number>>(() =>
    Object.fromEntries(PRODUCTS.map((p) => [p.id, p.stock])),
  );

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) {
      try {
        setStock(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const update = (id: string, qty: number) => {
    setStock((s) => {
      const next = { ...s, [id]: Math.max(0, qty) };
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  const reset = () => {
    const fresh = Object.fromEntries(PRODUCTS.map((p) => [p.id, p.stock]));
    setStock(fresh);
    localStorage.setItem(KEY, JSON.stringify(fresh));
  };

  return { stock, update, reset };
}