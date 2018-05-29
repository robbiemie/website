/* eslint-disable */
var Mock = require('./mock');
var Config = require('../common/Config');
Mock.setup({
  // timeout: Config.mockLoadingTime,
  timeout: 300
});
// 单机游戏分享落地页
Mock.mock(/getRedPacket/, {
"code":1,
"data":{
    "uid": 321546546, //uid
    "totalMoney": 1000, // 总金额
    "redPackets":[{
      "index": 1, // 红包序号
      "money": 50, // 红包金额
      "open": true, //  是否已经打开
      "createTime": 2018-4-19 // 创建时间
    },
    {
      "index": 1,
      "money": 50,
      "open": true,
      "createTime": 2018-4-19
    }]
}
})

Mock.mock(/getInviteInfo/, {
"code": 1,
"data": {
    "uid": 132456798,               //uid
    "inviteHelps": [
  {
    helperHeaderUrl: '//makefriends.bs2dl.yy.com/bm1522897953158.jpg',
    helperName: '...桃花fafafasfsafasfaffasf树',
    challengeScore: 14.18,
    createTime: 134242424
  },
  {
    helperHeaderUrl: '//makefriends.bs2dl.yy.com/bm1522897965239.jpg',
    helperName: '阿fasfaf超',
    challengeScore: 36.88,
    createTime: 134242424
  },
  {
    helperHeaderUrl: '//makefriends.bs2dl.yy.com/bm1522897996073.jpg',
    helperName: 'feng',
    challengeScore: 60.12,
    createTime: 134242424
  },
  {
    helperHeaderUrl: '//makefriends.bs2dl.yy.com/bm1522898005303.jpg',
    helperName: '苦苦fasfasf熊',
    challengeScore: 27.36,
    createTime: 134242424
  },
  {
    helperHeaderUrl: '//thirdqq.qlogo.cn/qqapp/101154992/D3D0A3089B15671C95B8108E32C60194/100',
    helperName: '火火火',
    challengeScore: 35.68,
    createTime: 134242424
  },
  {
    helperHeaderUrl: '//thirdqq.qlogo.cn/qqapp/101154992/41DF29272F2AE9CBA28072AE5EEC05E1/100',
    helperName: 'Cindy酱',
    challengeScore: 23.2,
    createTime: 134242424
  },
  {
    helperHeaderUrl: '//makefriends.bs2dl.yy.com/bm1522897978161.jpg',
    helperName: '酸dsafasfasfa辣粉...',
    challengeScore: 18.34,
    createTime: 134242424
  },
  {
    helperHeaderUrl: '//makefriends.bs2dl.yy.com/bm1522898020314.jpg',
    helperName: 'Hafsappy',
    challengeScore: 54.18,
    createTime: 134242424
  },
  {
    helperHeaderUrl: '//thirdqq.qlogo.cn/qqapp/101154992/C84E102001D7F67E02D27C4114A140E5/100',
    helperName: '灯fasfsafsafasf灯灯等',
    challengeScore: 19.7,
    createTime: 134242424
  }
]}
})

Mock.mock(/getChallengeScore/, {
"code": 1,
"data": {
    "uid": 3212131,  //uid
    "shareCount": 5, // 分享次数
    "lastHelpTotalScore": 50, // 上次助力总分
    "helpTotalScore": 200, // 助力总分
    "lastGameBestScore": 70, // 上局游戏最佳分
    "gameBestScore": 300, // 游戏最佳分
    "totalScore": 170, // 总分数
    "red": true, // 是否展示红点
    "updateTime": '2018-4-19', // 最后更新时间
    "redPacketConfig":[{score:10,money:1},{score:100,money:2},{score:700,money:10},{score:1000,money:100}]
}
})

Mock.mock(/invite/, {
  "code": 1,
})

Mock.mock(/enterInvitePage/, {
"code": 1,
"data": {
    "isInviter": false,  // 是否是邀请者
    "isHelped": false, // 是否已经助力
    "isRedPacketReceived": true, // 是否小红包已经领取
    "inviterName": '测试小mock', // 邀请者姓名
    "inviterHeaderUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9A9goohaObUHhwp1zKZDYUHgD6NJS9Rv3aL7A_eo6R4ORv-tn0Q", // 邀请者头像
    "inviterTotalMoney": 8 // 邀请者总金额
}
})

Mock.mock(/getFriendRankList/, {
  "data": {
        "hasNext": true,                  //是否有下一页
        "code": 1,
        "list": [
            {
                "id": 4,         //id
                "uid": 50015878, //uid
                "nickName": "苏翔航|UED",  //昵称
                "avatar": "http://wwww.123.png",//头像
                "amount": 5.33,  //金额
            },
            {
                "id": 5,         //id
                "uid": 50015878, //uid
                "nickName": "苏翔航|UED",  //昵称
                "avatar": "http://wwww.123.png",//头像
                "amount": 5.33,  //金额
            }
        ],
        "message": null
  }
})

Mock.mock(/getAllRankList/, {
  "data": {
        "hasNext": true,                  //是否有下一页
        "code": 1,
        "list": [
            {
                "id": 4,         //id
                "uid": 50015878, //uid
                "nickName": "苏翔航|UED",  //昵称
                "avatar": "http://wwww.123.png",//头像
                "amount": 5.33,  //金额
            },
            {
                "id": 5,         //id
                "uid": 50015878, //uid
                "nickName": "苏翔航|UED",  //昵称
                "avatar": "http://wwww.123.png",//头像
                "amount": 5.33,  //金额
            }
        ],
        "message": null
  }
})

Mock.mock(/enterMainPage/, {
"code": 1,
"data": {
    "uid": 123,
    "shareCount": 1,  // 分享次数
    "isRed": true, // 是否展示红点
    "isPlayedGame": true, // 是否已经玩过游戏
    "remainRedPacketNum": 1
}
})

Mock.mock(/reportGameResult/, {
"code": 1,
"data": {
  "score": "12345",  //游戏得分
  "best": true, // 是否最佳
}
})

Mock.mock(/reportAssistGameResult/, {
"code": 1,
"data": {
"success": true,  //助力成功
}
})


Mock.mock(/getFreshRedPacket/, {
  "code": 1,
  "data":[
  {
    "type":1,
    "number":1, //红包号
    "amount":10, //红包金额 单位分
    "islast": false
  },
  {
    "type":2,
    "number":2, //红包号
    "amount":12, //红包金额 单位分
    "islast": false
  },
  {
    "type":3,
    "number":3, //红包号
    "amount":15, //红包金额 单位分
    "islast": true
  }
  ]
})

Mock.mock(/getLatestRedPacket/, {
  "code": 1,
  "data": [
  {
    "amount":12, //红包金额 单位分
"userName":"昵称",
"userAvatar":"//thirdqq.qlogo.cn/qqapp/101154992/C84E102001D7F67E02D27C4114A140E5/100"
},{
    "amount":12, //红包金额 单位分
"userName":"昵称",
"userAvatar":"//thirdqq.qlogo.cn/qqapp/101154992/C84E102001D7F67E02D27C4114A140E5/100"
  },{
    "amount":12, //红包金额 单位分
"userName":"昵称",
"userAvatar":"//thirdqq.qlogo.cn/qqapp/101154992/C84E102001D7F67E02D27C4114A140E5/100"
  },{
    "amount":12, //红包金额 单位分
"userName":"昵称",
"userAvatar":"//thirdqq.qlogo.cn/qqapp/101154992/C84E102001D7F67E02D27C4114A140E5/100"
  },{
    "amount":12, //红包金额 单位分
"userName":"昵称",
"userAvatar":"//thirdqq.qlogo.cn/qqapp/101154992/C84E102001D7F67E02D27C4114A140E5/100"
  },{
    "amount":12, //红包金额 单位分
"userName":"昵称",
"userAvatar":"//thirdqq.qlogo.cn/qqapp/101154992/C84E102001D7F67E02D27C4114A140E5/100"
  },{
    "amount":12, //红包金额 单位分
"userName":"昵称",
"userAvatar":"//thirdqq.qlogo.cn/qqapp/101154992/C84E102001D7F67E02D27C4114A140E5/100"
  }
  ]
})

Mock.mock(/getUserInfo/, {
  "code": 1,
  "data": {
    "nickName": "x",
    "headPic": ""
  }
})

Mock.mock(/createGameUrl/, {
  "code": 1,
  "data": {
    "gameUrl": "https://xhcomponent.bs2dl.yy.com/yigedoubunengsi_dj2/873a848f1be05e4e79448d431b513a7f/index.html?js_sdk=1&nonstr=3xo823r3-8cmd-es0f-qarx-1a91hyrwhj7q&port=&sign=63ec66c0a0bdd2516e56fc2952b0414a0ce3d90d&timestamp=1524467879&websocketdomain=&wsscheme=&post_data=%7B%22channelid%22%3A%22yy%22%2C%22gameid%22%3A%22yigedoubunengsi_dj2%22%2C%22roomid%22%3A%226cb2d187-a633-46b8-bc3e-c58ac55bd418%22%2C%22player%22%3A%7B%22uid%22%3A%220%22%2C%22name%22%3A%22Anonymous%22%2C%22avatarurl%22%3A%22http%3A%2F%2Fyyweb.yystatic.com%2Fpc%2Fimages%2Fportrait%2Fperson%2F1.jpg%22%2C%22opt%22%3A%22%7B%7D%22%2C%22teamid%22%3A%22%22%2C%22sex%22%3A0%7D%7D"
  }
})

Mock.mock(/gainFirstAssistRedPacket/, {
  "code": 1,
  "data": {
    "money": 11,
    "totalMoney": 22
  }
})

Mock.mock(/addFriend/, {
 "appId":"appId",
 "sign":"34555a3da62717084f69ba7376f94a25581bcab968ca346a4663cc699360f7fd",
 "data":{
    "code":1,
    "message":"具体错误信息"
  }
})
