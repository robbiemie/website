const SvgTool = () => import(/* webpackChunkName: "portfoliosvgTool" */ './svgTool/index.vue')

export default [
  {
    name: 'svgtool',
    path: '/portfolio/svgtool',
    component: SvgTool
  }
]
