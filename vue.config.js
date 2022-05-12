const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const resolve = (filePath) => path.resolve(__dirname, filePath);
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  publicPath: '/roshan-ui-vue/',
  pages: {
    index: {
      entry: resolve('story/main.ts'),
      template: 'public/index.html',
      filename: 'index.html',
      title: 'roshan-ui-vue',
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch-index').delete('preload-index');
    config.resolve.alias.set('story', resolve('story')).set('src', resolve('src'));
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "src/style/global-import.scss"`,
      },
    },
  },
});
