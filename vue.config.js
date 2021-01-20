module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/library/scss/engine.scss";'
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
