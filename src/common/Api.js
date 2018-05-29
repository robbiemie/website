import Config from './Config'
import Util from './Util'

const {
  jsonp,
  memoize,
  getUrlParameters
} = Util
const { urlBase } = Config
const { gid, inviterUid } = getUrlParameters()

if (Config.mock) {
  console.log('@/dev/mock-index')
  require('@/dev/mock-index')
}

const api = {

  getRedPacket: _ => jsonp(`${urlBase}/redPacket/getRedPacket`),

  getInviteInfo: data => jsonp(`${urlBase}/redPacket/getInviteInfo`, data),

  getChallengeScore: _ => jsonp(`${urlBase}/redPacket/getChallengeScore`, {
    gid
  }),

  invite: gid => jsonp(`${urlBase}/redPacket/invite`, {
    gid
  }),

  enterInvitePage: _ => jsonp(`${urlBase}/redPacket/enterInvitePage`),

  enterMainPage: _ => jsonp(`${urlBase}/redPacket/enterMainPage`),

  reportGameResult: data => jsonp(`${urlBase}/redPacket/reportGameResult`, data),

  reportAssistGameResult: data => jsonp(`${urlBase}/redPacket/reportAssistGameResult`, data),
  // 查询最新生成的红包
  getFreshRedPacket: data => jsonp(`${urlBase}/redPacket/getFreshRedPacket`, data),
  // 获取用户信息
  getUserInfo: _ => jsonp(`${urlBase}/user/getUserInfo`),
  // 获取游戏url
  createGameUrl: data => jsonp(`${urlBase}/pksingle/createGameUrl`, data),

  getGameUrl: memoize(async _ => {
    const rsp = await api.getUserInfo()
    return api.createGameUrl({
      gid,
      nickName: rsp.data.nickName,
      headPic: rsp.data.headPic
    })
  }),
  // 获取好友榜单列表数据
  getFriendRankList: data => jsonp({
    url: '//xhweb-activity.yy.com/activity/xh/werwolf/game/getFriendRankList',
    data,
    activityId: Config.activityId
  }),
  // 获取全部榜单列表数据
  getAllRankList: data => jsonp({
    url: '//xhweb-activity.yy.com/activity/xh/werwolf/game/getAllRankList',
    data,
    activityId: Config.activityId
  }),

  addFriend: _ => jsonp({
    url: '//xhweb-activity.yy.com/activity/xh/werwolf/game/addFriend',
    data: {
      shareUid: inviterUid,
      activityId: Config.activityId
    }
  }),
  // 是否登录
  isLogin: () => jsonp({
    url: '//xhweb.yy.com/activity/xh/werwolf/third/share/isLogin'
  }),
  // 同步微信信息
  updateUserInfo () {
    return jsonp({
      url: '//fts.yy.com/web_friend/update_peronal_info',
      data: {
        third_login_type: 1
      }
    })
  },
  getLatestRedPacket: _ => jsonp(`${urlBase}/redPacket/getLatestRedPacket`, {
    gid
  }),
  gainFirstAssistRedPacket: _ => jsonp(`${urlBase}/redPacket/getLatestRedPacket`, {
    gid,
    inviterUid: Config.userInfo.uid
  })
}

export default api
