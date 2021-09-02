
module.exports = {
  images: {
    loader: "imgix",
    path: "",
    disableStaticImages: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId},
  ) {
    return {
      '/': {page: '/'},
      '/cadastro/passo2': {page: '/cadastro/passo2'},
      '/usuario/home': {page: '/usuario/home'},
      '/usuario/parentes': {page: '/usuario/parentes'},
      '/diagnosticos': {page: '/diagnosticos'},
      '/eventos': {page: '/eventos'},
      '/lembretes': {page: '/lembretes'},
      '/login': {page: '/login'},
      '/resetar-senha': {page: '/resetar-senha'},
      '/sobre': {page: '/sobre'},
      '/termos-de-uso': {page: '/termos-de-uso'}
    }
  },
}