module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '\n          @import "~@/library/scss/engine.scss";\n        '
      }
    }
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

  pwa: {
    productionSourceMap: false,
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
}
