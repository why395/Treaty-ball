// pages/myCollects/myCollects.js
var app = getApp();
Page({
  data:{
    collects:[
      {
        img:'../../images/pic7.jpg',
        title:'斯台普斯',
        location:'洛杉矶',
        cost:'¥30元起',
        show:true
      }
    ],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  viewSimilar:function(){
    wx.navigateTo({url: '../rent/rent'});
  },
  removeCollect:function(e){
    var index = e.target.dataset.index
    var collects = this.data.collects;
    collects[index].show = false;
    this.setData({
      collects:collects
    });
  }

})