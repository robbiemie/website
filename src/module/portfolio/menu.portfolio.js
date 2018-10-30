const SvgTool = () => import(/* webpackChunkName: "svgTool" */ './svgTool/svg.vue')

export default [
  {
    name: 'svg在线生成工具',
    path: '/portfolio/svgtool',
    component: SvgTool
  }
]
