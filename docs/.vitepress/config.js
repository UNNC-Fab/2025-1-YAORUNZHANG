import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/2025-1-YAORUNZHANG/',
  title: "UNNC-FAB",
  description: "UNNC-FAB Yaorun Documentation",
  themeConfig: {
    logo: '/images/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/projects/2025.md' },
      { text: 'Tools', link: '/tools/2025.md' },
      { text: 'About Me', link: '/about/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'About Me', link: '/about/' },
        ],
        text: 'Tools',
        items: [
          { text: 'Tools 2025', link: '/tools/2025.md' },
        ],
        text: 'Documentation',
        items: [
          { text: 'UNNC-FAB 2025', link: '/projects/2025.md' },
        ],
      }
    ]
  }
})