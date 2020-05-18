// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'../../images/1.png',
    imgList: [],
    text: null,
    textareaBValue: '',
    some:"",
    title:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  hideModal(e) {
    var self = this;
    console.log(123);
    console.log(self.data.textareaBValue);
    this.setData({
      modalName: null,
      some:""
    })
  },
  sendData:function(){
    var self = this;
    var content = "123"
      wx.request({
        url: 'url',
        data:{
          content:self.data.textareaBValue,
          title:"biaoti"
        },
        header: {
          "content-type": "application/json"
        },
        success:function(req){
           self.dat
        }
      })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },

  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },

  DelImg(e) {
    wx.showModal({
      title: '删除图片',
      content: '确定要删除这张图片吗？',
      cancelText: '再看看',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value,
      title:"123",
    })
    console.log(e.detail.value)
  }
})