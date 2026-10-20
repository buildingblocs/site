import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://buildingblocs.sg",

    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Instrument Sans",
            cssVariable: "--font-instrument",
            weights: ["400 700"],
        },
    ],

    redirects: {
        "/past-years": "/about-us/archive",
    },

    integrations: [
        react(),
        sitemap(),
        sanity({
            projectId: "oovnxnpf",
            dataset: "production",
            // Set useCdn to false if you're building statically.
            useCdn: false,
            // Optional: log server-side Sanity client requests.
            // Modes: 'dev' | 'build' | 'always'
            // logClientRequests: "dev"
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },

    build: {
        inlineStylesheets: "always",
    },
});
