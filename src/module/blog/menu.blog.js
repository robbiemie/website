const List = () => import(/* webpackChunkName: "bloglist" */ './list/index.vue')

export default [
  {
    name: 'messages',
    path: '/blog/list',
    component: List
  }
]
