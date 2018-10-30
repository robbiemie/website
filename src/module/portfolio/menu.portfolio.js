const SvgTool = () => import(/* webpackChunkName: "portfoliosvgTool" */ './svgTool/index.vue')

export default [
  {
    name: 'svg在线生成工具',
    path: '/portfolio/svgtool',
    component: SvgTool
  }
]
