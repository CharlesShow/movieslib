import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

const envPath = "../.env";
dotenv.config({ path: envPath });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5000 },
  base: "/movieslib",
});
