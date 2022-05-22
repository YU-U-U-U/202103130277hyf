import common from "../../utils/public";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航数据
    nav:[
      {
        id:0,
        title:'春',
        picurl:'/images/icon/spring.png',
        navurl:'/pages/spring/spring',
      },
      {
        id:1,
        title:'夏',
        picurl:'/images/icon/summer.png',
        navurl:'',
      },
      {
        id:2,
        title:'秋',
        picurl:'/images/icon/autumn.png',
        navurl:'',
      },
      {
        id:3,
        title:'冬',
        picurl:'/images/icon/winter.png',
        navurl:'',
      },
      {
        id:4,
        title:'四季',
        picurl:'/images/icon/season.png',
        navurl:'',
      },
    ],
// 二十四节气数据
    stMain:[
      {
        id:0,
        title:'立春',
        picurl:'/images/solar term/1.jpg',
        des:'Spring Begins',
      },
      {
        id:1,
        title:'雨水',
        picurl:'/images/solar term/2.jpg',
        des:'rain water',
      },
      {
        id:2,
        title:'立夏',
        picurl:'/images/solar term/3.jpg',
        des:'summer Begins',
      },
      {
        id:3,
        title:'小满',
        picurl:'/images/solar term/4.jpg',
        des:'grain buds',
      },
      {
        id:4,
        title:'立秋',
        picurl:'/images/solar term/5.jpg',
        des:'autumn Begins',
      },
      {
        id:5,
        title:'处暑',
        picurl:'/images/solar term/6.jpg',
        des:'Limit of Heat',
      },
      {
        id:6,
        title:'立冬',
        picurl:'/images/solar term/7.jpg',
        des:'Winter Begins',
      },
      {
        id:7,
        title:'小雪',
        picurl:'/images/solar term/8.jpg',
        des:'Lesser Snow',
      },
    ],
// 四季的色彩数据
    seasonsColor:[
      {
        id:0,
        title:'春天是绿色的，柳枝发出新芽，献给人们一片浓绿',
        picurl:'/images/seasons color/1.jpg',
        author:'牡丹',
        posttime:'2022-03-01'
      },
      {
        id:1,
        title:'夏天是红色的，火红的太阳烤着大地',
        picurl:'/images/seasons color/2.jpg',
        author:'柚子',
        posttime:'2021-06-10'
      },
      {
        id:2,
        title:'秋天是金色的，树叶像一团团火一样燃烧',
        picurl:'/images/seasons color/3.jpg',
        author:'红枫',
        posttime:'2021-09-19'
      },
      {
        id:3,
        title:'冬天是白色的，天上掉下雪籽，慢慢变成雪花',
        picurl:'/images/seasons color/4.jpg',
        author:'榆叶梅',
        posttime:'2021-12-28'
      }
    ],
  },
// 网络请求数据
getRequest:function(){
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRequest();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})