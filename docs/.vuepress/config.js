import { defaultTheme, defineUserConfig } from 'vuepress'
import { containerPlugin } from '@vuepress/plugin-container'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { hopeTheme } from "vuepress-theme-hope"

export default defineUserConfig({
  title: '',
  description: 'Just playing around',
  // theme: defaultTheme({
  //   repo: 'strapi/documentation',
  //   colorMode: 'auto', // initial light/dark mode will be set according to user's browser/system preference
  //   logo: '/logo.png',
  //   logoDark: '/logo.png', // we could design a logo for dark mode ^^
  //   navbar: [
  //     {
  //       text: 'Developer Docs',
  //       link: '/dev-docs/intro'
  //     },
  //     {
  //       text: 'User Guide',
  //       link: '/user-guide/intro'
  //     },
  //   ],
  //   sidebarDepth: 3,
  //   sidebar: {
  //     '/dev-docs/': [
  //       {
  //         text:'Welcome!',
  //         link: '/dev-docs/intro.md'
  //       },
  //       {
  //         isGroup: true,
  //         text: 'APIs',
  //         children: [
  //           {
  //             text: 'Admin Panel API for plugins', 
  //             link: '/dev-docs/api/admin-panel-api.md'
  //           },
  //           // {
  //           //   text: 'REST API', 
  //           //   link: '/dev-docs/api/rest-api.md'
  //           // },
  //         ]
  //       },
  //       {
  //         isGroup: true,
  //         text: 'Development',
  //         children: [
  //           {
  //             isGroup: true,
  //             text: 'Backend Customization',
  //             collapsible: true,
  //             children: [
  //               {
  //                 text: 'Controllers', 
  //                 link: '/dev-docs/development/backend-customization/controllers.md'
  //               },
  //               {
  //                 text: 'Middlewares', 
  //                 link: '/dev-docs/development/backend-customization/middlewares.md'
  //               },
  //             ]
  //           }
  //           // {
  //           //   text: 'REST API', 
  //           //   link: '/dev-docs/api/rest-api.md'
  //           // },
  //         ]
  //       }
  //     ],
  //     '/user-guide/': [

  //     ]
  //   },
  //   lastUpdated: true,
  //   contributors: true,
  //   plugins: [
  //     backToTopPlugin(),
  //     containerPlugin({
  //       type: 'strapi',
  //       defaultInfo: '🤓 ',
  //       before: (info) =>
  //         `<div class="custom-container ${type}">${
  //           info ? `<p class="custom-container-title">${info}</p>` : ''
  //         }\n`,
  //       after: () => '</div>\n',
  //     }),
  //     containerPlugin({
  //       type: 'note',
  //       defaultInfo: '🤓 ',
  //       before: (info) =>
  //         `<div class="custom-container ${type}">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
  //       after: () => '</div>\n',
  //     }),
  //   ],
  //   markdown: {
  //     extractHeaders: {
  //       level: [2, 3]
  //     }
  //   }
  // }),
  theme: hopeTheme({
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
    sidebarDepth: 3,
    sidebar: {
      '/dev-docs/': [
        {
          text:'Welcome!',
          link: '/dev-docs/intro.md'
        },
        {
          isGroup: true,
          text: 'APIs',
          children: [
            {
              text: 'Admin Panel API for plugins', 
              link: '/dev-docs/api/admin-panel-api.md'
            },
            // {
            //   text: 'REST API', 
            //   link: '/dev-docs/api/rest-api.md'
            // },
          ]
        },
        {
          isGroup: true,
          text: 'Development',
          children: [
            {
              isGroup: true,
              text: 'Backend Customization',
              collapsible: true,
              children: [
                {
                  text: 'Controllers', 
                  link: '/dev-docs/development/backend-customization/controllers.md'
                },
                {
                  text: 'Middlewares', 
                  link: '/dev-docs/development/backend-customization/middlewares.md'
                },
              ]
            }
            // {
            //   text: 'REST API', 
            //   link: '/dev-docs/api/rest-api.md'
            // },
          ]
        }
      ],
      '/user-guide/': [

      ]
    }, 
    plugins: {
      mdEnhance: {
        tabs: true,
        codetabs: true,
        demo: true,
        // playground config here
        playground: {
          // add presets here
          presets: [
            "ts",
            "vue",
          ],
        },
      }
    }
  })
})