//Page Object
Page({
  data: {
    userInfo: {},
    imgUrls: [
      'cloud://yuzhoudabaozha-xavo0.7975-yuzhoudabaozha-xavo0-1302034659/swiper1.jpg',
      'cloud://yuzhoudabaozha-xavo0.7975-yuzhoudabaozha-xavo0-1302034659/swiper2.jpg',
      'cloud://yuzhoudabaozha-xavo0.7975-yuzhoudabaozha-xavo0-1302034659/swiper3.jpg',
      'cloud://yuzhoudabaozha-xavo0.7975-yuzhoudabaozha-xavo0-1302034659/swiper4.jpg',
    ],

    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    sportsItems:[
      {
        pic:'../../images/pic7.jpg',
        title:'斯台普斯',
        rank:'4.6',
        location:'洛杉矶',
        price:'¥30元起',
      },
      {
        pic:'../../images/pic7.jpg',
        title:'厦门众一羽毛球馆',
        rank:'4.3',
        location:'厦门市湖里区火炬东路32号',
        price:'¥40/小时',
      },
      {
        pic:'../../images/pic7.jpg',
        title:'羽毛球场1',
        rank:'4.3',
        location:'厦门市xx区xx路318号',
        price:'¥60/小时',
      }
    ],
  },
  //options(Object)
});
  