module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/library/scss/engine.scss";
        `
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
