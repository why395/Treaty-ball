// pages/user/user.js
Page({
  data:{
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    }
  },
  onLoad: function () {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })
    // var that = this;
    // wx.getUserInfo(function(userinfo){
    //   that.setData({
    //     userinfo:userinfo
    //   })
    // })
  }
  // onShow(){
  //   const userinfo=wx.getStorageSync("userinfo");
  //   this.setData({userinfo})
  // }
  
})