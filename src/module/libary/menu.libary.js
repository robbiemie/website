const Messages = () => import(/* webpackChunkName: "libmessages" */ './messages/index.vue')
export default [
  {
    name: 'messages',
    path: '/lib/messages',
    component: Messages
  }
]
