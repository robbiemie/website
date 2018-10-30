const List = () => import(/* webpackChunkName: "bloglist" */ './list/index.vue')

export default [
  {
    name: 'bloglist',
    path: '/blog/list',
    component: List
  }
]
