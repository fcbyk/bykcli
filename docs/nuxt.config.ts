export default defineNuxtConfig({
  extends: ['@fcbyk/shadcn-docs-nuxt-lite'],
  content: {
  highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['py','python','toml'],
    },
  }
})

