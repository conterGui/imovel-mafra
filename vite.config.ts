import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 1. ADICIONE A BASE AQUI: Use o nome do seu repositório entre barras
  // Se o seu repo é github.com, a base é '/imovel_mafra/'
  base: '/imovel-mafra/',

  server: {
    host: "::",
    port: 8080,
  },
  
  // Manteve o suporte para .JPG (maiúsculas) que resolve parte do erro anterior
  assetsInclude: ["**/*.JPG"],
  
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // 2. GARANTIR O BUILD: Define a pasta de saída (opcional, padrão é dist)
  build: {
    outDir: 'docs',
  }
}));
