import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Palette = "rose" | "mint" | "lavender" | "peach";
export type Mode = "light" | "dark";

export const PALETTES: { id: Palette; name: string; swatch: string }[] = [
  { id: "rose", name: "Rosa", swatch: "oklch(0.85 0.08 15)" },
  { id: "mint", name: "Menta", swatch: "oklch(0.85 0.08 165)" },
  { id: "lavender", name: "Lavanda", swatch: "oklch(0.85 0.08 295)" },
  { id: "peach", name: "Durazno", swatch: "oklch(0.86 0.09 50)" },
];

type Ctx = {
  palette: Palette;
  setPalette: (p: Palette) => void;
  mode: Mode;
  toggleMode: () => void;
};

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [palette, setPaletteState] = useState<Palette>("rose");
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    const p = (localStorage.getItem("vp-palette") as Palette) || "rose";
    const m = (localStorage.getItem("vp-mode") as Mode) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setPaletteState(p);
    setMode(m);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-palette", palette);
    localStorage.setItem("vp-palette", palette);
  }, [palette]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("vp-mode", mode);
  }, [mode]);

  return (
    <ThemeCtx.Provider
      value={{
        palette,
        setPalette: setPaletteState,
        mode,
        toggleMode: () => setMode((m) => (m === "light" ? "dark" : "light")),
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}