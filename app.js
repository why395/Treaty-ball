//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function(options) {
    
  },
  onShow: function(options) {

  },
  onHide: function() {

  },
  onError: function(msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options) {

  },
  globalData: {
    hasLogin: false,
    //webSocket 动作常量
    CONNECT: 1, 	// 第一次(或重连)初始化连接
    CHAT: 2, 		// 聊天消息
    SIGNED: 3, 		// 消息签收
    KEEPALIVE: 4, 	// 客户端保持心跳
  }

});
  