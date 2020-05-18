// pages/court_list/court_list.js
Page({
  data:{
    tabs:[
      {
        id:0,
        value:"综合",
        isActive: true
      },
      {
        id:1,
        value:"距离",
        isActive: false
      },
      {
        id:2,
        value:"价格",
        isActive: false
      },
    ],
    rents:[
      {
        name:'羽毛球馆1',
        img:'../../images/pic7.jpg',
        score:4.8,
        location:'厦门市xx区xx路xxx号',
        distance:'600m',
        cost:'¥60起',
      }
    ]
  },
  onLoad:function(options){
  },

 //标题点击事件 从子组件传递
 handleTabsItemChange(e){
   //获取被点击的标题索引
   const {index}=e.detail;
   //修改源数组
   let {tabs}=this.data;
   tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
   //赋值到data中
   this.setData({
     tabs
   })
 },
})

