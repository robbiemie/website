const Messages = () => import(/* webpackChunkName: "libmessages" */ './messages/index.vue')
const SvgTool = () => import(/* webpackChunkName: "libsvgTool" */ './svgTool/index.vue')

export default [
  {
    name: 'messages',
    path: '/lib/messages',
    component: Messages
  },
  {
    name: 'svgtool',
    path: '/lib/svgtool',
    component: SvgTool
  }
]
