// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';



// @ts-ignore
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';
//import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),react()],
  output: 'server',
  adapter: vercel()
});