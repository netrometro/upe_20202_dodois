
module.exports = {
  images: {
    loader: "imgix",
    path: "",
  },
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId},
  ) {
    return {
      '/': {page: '/'},
      '/cadastro/passo2': {page: '/cadastro/passo2'},
      '/diagnosticos': {page: '/diagnosticos'},
      '/eventos': {page: '/eventos'},
      '/lembretes': {page: '/lembretes'},
      '/login': {page: '/login'},
      '/resetar-senha': {page: '/resetar-senha'}
    }
  },
}