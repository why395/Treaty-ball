// pages/item/item.js
Page({
  data:{
    name:'',
    coverPic:'',
    address:'',
    remarkslength:2,
    price:30,
    picker: ['1h', '2h', '3h'],
    rentItmes:[
      {
        title:'羽毛球场地1',
        notice:'空闲',
        price:'¥60/小时',
      },
      {
        title:'羽毛球场地3',
        notice:'空闲',
        price:'¥60/小时',
      },
      {
        title:'羽毛球场地4',
        notice:'空闲',
        price:'¥60/小时',
      }
    ],
    collected:'',
    markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 22,
      height: 22
    }],
    time: '12:00',
    date: '2020-05-01'
  },
  onLoad:function(options){
    wx.request({
      url: 'http://localhost:8080/arena/detail',
      data:{
        arena_id:1,
        
      },
      method:'POST',
      header: {
        "content-type": "application/json"
      },
      success:(result) =>{
        console.log(result);
        this.setData({
          name:result.data.arena.name,
          coverPic:result.data.arena.cover_image,
          address:result.data.arena.address
        })
      }
    });
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  }
  
  // onShow:function(){
  //   let pages = getCurrentPages();
  //   let getCurrentPages=pages[pages.length-1];
  //   let options = currentPages.options;
  //   const {result}=options;
  //   this.data(arena_id);
  //   //1.获取缓存中的球馆收藏的数组
  //   let collect = wx.getStorageSync('collect')||[];
  //   //2.判断当前球馆是否被收藏
  //   let isCollect = collect.some(v=>v.arena_id===result.data.arena.id)
  // }

    /*球馆收藏
    1.页面onShow的时候 加载缓存中球馆收藏的数据
    2.判断当前商品是不是被收藏
      1 是 改变页面图标
      2 不是 。。。
    3.点击商品收藏按钮
      1 判断球馆是否存在与缓存数据中
      2 存在 把该球馆删除
      3不存在 把球馆添加到收藏数组中，存入缓存中即可
      */
})