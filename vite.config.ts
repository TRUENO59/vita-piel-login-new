import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [viteTsConfigPaths(), tanstackStart({
    target: "cloudflare-worker",
    server: { entry: "server" },
  }), react(), cloudflare({
    viteEnvironment: {
      name: "ssr"
    }
  })],
});