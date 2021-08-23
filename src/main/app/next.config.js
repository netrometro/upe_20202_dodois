const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],

  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId},
  ) {
    return {
      '/': {page: '/'},
      '/cadastro/passo1': {page: '/cadastro/passo1'},
      '/cadastro/passo2': {page: '/cadastro/passo2'},
      '/diagnosticos': {page: '/diagnosticos'},
      '/eventos': {page: '/eventos'},
      '/lembretes': {page: '/lembretes'},
      '/login': {page: '/login'},
      '/resetar-senha': {page: '/resetar-senha'}
    }
  },
})