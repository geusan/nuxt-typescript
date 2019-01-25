const path = require('path')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuxt with typescript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '~/assets/css/main.scss',
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  modules: [
    // if want to use nuxt-ts library
    // [
    //   'nuxt-ts',
    //   {
    //     forkTsChecker: { workers: 2, memoryLimit: 4096 },
    //     tsconfig: path.join(__dirname, 'tsconfig.json'),
    //   },
    // ],
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isServer }) {
      const tsLoader = {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
          configFile: path.join(__dirname, 'tsconfig.json'),
        },
        exclude: [/vendor/, /\.nuxt/],
      }
      config.module.rules.push({
        test: /((client|server)\.js)|(\.tsx?)$/,
        ...tsLoader,
      })

      config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === 'vue-loader') {
          if (!rule.options.loaders) {
            rule.options.loaders = {}
          }
          rule.options.loaders.ts = tsLoader
        }
        return rule
      })
      if (config.resolve.extensions.indexOf('.ts') < 0) {
        config.resolve.extensions.push('.ts')
      }
      if (config.resolve.extensions.indexOf('.tsx') < 0) {
        config.resolve.extensions.push('.tsx')
      }
      if (isServer) {
        config.externals = []
      }
    },
  },
}
