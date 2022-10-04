import { defaultTheme, defineUserConfig } from 'vuepress'
import { containerPlugin } from '@vuepress/plugin-container'

export default defineUserConfig({
  title: '',
  description: 'Just playing around',
  theme: defaultTheme({
    repo: 'strapi/documentation',
    colorMode: 'auto', // initial light/dark mode will be set according to user's browser/system preference
    logo: '/logo.png',
    logoDark: '/logo.png', // we could design a logo for dark mode ^^
    navbar: [
      {
        text: 'Developer Docs',
        link: '/dev-docs/intro'
      },
      {
        text: 'User Guide',
        link: '/user-guide/intro'
      },
    ],
    // sidebar: [],
    lastUpdated: true,
    contributors: true,
    plugins: [
      containerPlugin({
        type: 'strapi',
        defaultInfo: '🤓 ',
        before: (info) =>
          `<div class="custom-container ${type}">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
        after: () => '</div>\n',
      }),
    ]
  }),
})