import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "/src"),
            "@assets":  path.resolve(__dirname, "/src/assets"),
            "@components":  path.resolve(__dirname, "/src/components"),
            "@hooks":  path.resolve(__dirname, "/src/hooks"),
            "@pages":  path.resolve(__dirname, "/src/pages"),
            "@store":  path.resolve(__dirname, "/src/store"),
            "@styles":   path.resolve(__dirname, "/src/styles"),
            "@utils":   path.resolve(__dirname, "/src/utils"),
        }
    }
})
