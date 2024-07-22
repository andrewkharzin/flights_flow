import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Flight Flow',
      description:
        'Dezorg RAMP system',
      project: {
        links: {
          github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [
               
              ],
          },
        },
        footer: {
          year: 2024,
        },
        welcome: {
          title: 'Flights&nbsp;3 Flow',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'Andre Khzz',
        links: {
          github: 'https://github.com/viandwi24',
  
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})