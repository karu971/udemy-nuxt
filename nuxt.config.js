const pkg = require('./package')
const axios = require('axios')


module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'WB Blog',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    name: 'circle',
    color: '#fff',
    height: '24px',
    duration: 5000
  },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    basURL: process.env.BASE_URL || 'https://nuxt-blog-e5ae3.firebaseio.com/',
    credentials: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-e5ae3.firebaseio.com/',
    fbAPIKey: 'AIzaSyBqB8Dlu5VfGIJTMF-HF9wHE02raEub6gw'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  serverMiddleware: [

  ],
  generate: {
    routes: function () {
      return axios
        .get('https://nuxt-blog-e5ae3.firebaseio.com/posts.json')
        .then(res => {
          const routes = []
          for (const key in res.data) {
            routes.push('/posts/' + key)
          }
          return routes
        })
    }
  }
}
