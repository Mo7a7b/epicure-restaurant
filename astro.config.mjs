// @ts-check
import { defineConfig } from 'astro/config';
import { fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  fonts:[
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable:"--font-playfair",
    },
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable:"--font-geist",
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable:"--font-geist-mono",
    }
  ],

  integrations: [react(), mdx()],
  adapter: vercel()
});