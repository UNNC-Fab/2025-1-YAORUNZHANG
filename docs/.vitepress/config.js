import { defineConfig } from 'vitepress'

export default defineConfig({
  base: 'https://unnc-fab.github.io/2025-1-YAORUNZHANG/',
  title: "UNNC-FAB Yaorun",
  description: "UNNC-FAB Yaorun",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/projects/2025.md' },
      { text: 'Tools', link: '/tools/1.md' },
      { text: 'About Me', link: '/about/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'About Me', link: '/about/' }
        ]
      },
      {
        text: 'Documentation',
        items: [
          { text: 'UNNC-FAB 2025', link: '/projects/2025.md' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: '2025', link: '/tools/1.md' }
        ]
      }
    ]
  }
})