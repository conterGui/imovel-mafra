import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: '/imovel-mafra/', // nome do repositório no GitHub
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'docs',     // GitHub Pages usa docs/
    emptyOutDir: true,  // limpa antes do build
    assetsDir: 'assets',// só para CSS/JS, suas imagens estão em public/
  },
}));
