import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://buildingblocs.sg',
  redirects: {
    '/past-years': '/archive',
    '/2017/[...slug]': 'https://old.buildingblocs.sg/2017/[...slug]',
    '/2018/[...slug]': 'https://old.buildingblocs.sg/2018/[...slug]',
    '/2019/[...slug]': 'https://old.buildingblocs.sg/2019/[...slug]',
    '/2020/[...slug]': 'https://old.buildingblocs.sg/2020/[...slug]',
    '/2021/[...slug]': 'https://old.buildingblocs.sg/2021/[...slug]',
    '/2022/[...slug]': 'https://old.buildingblocs.sg/2022/[...slug]',
    '/2023/[...slug]': 'https://old.buildingblocs.sg/2023-newnew/[...slug]',
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), sitemap()]
});