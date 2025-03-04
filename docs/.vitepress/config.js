import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/2025-1-YAORUNZHANG/',
  title: "UNNC-FAB-2025",
  description: "UNNC-FAB-2025 Documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/introduction' }
        ]
      }
    ]
  }
})