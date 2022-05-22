// pages/classtype/classtype.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 二十四节气详情
    sideNav:[
      {id:0,title:'全部'},
      {id:1,title:'春'},
      {id:2,title:'夏'},
      {id:3,title:'秋'},
      {id:4,title:'冬'}
    ],
    season:[],
    seasonAll:[
      {id:0,name:'立春',time:'2月3~5日',  src:'/images/24 solar terms/0.jpg',classid:1},
      {id:1,name:'雨水',time:'2月18~20日',src:'/images/24 solar terms/1.jpg',classid:1},
      {id:2,name:'惊蛰',time:'3月5~7日',  src:'/images/24 solar terms/2.jpg',classid:1},
      {id:3,name:'春分',time:'3月20~21日',src:'/images/24 solar terms/3.jpg',classid:1},
      {id:4,name:'清明',time:'4月4~6日',  src:'/images/24 solar terms/4.jpg',classid:1},
      {id:5,name:'谷雨',time:'4月19~21日',src:'/images/24 solar terms/5.jpg',classid:1},

      {id:6,name:'立夏',time:'5月5~7日',   src:'/images/24 solar terms/6.jpg',classid:2},
      {id:7,name:'小满',time:'5月20~22日', src:'/images/24 solar terms/7.jpg',classid:2},
      {id:8,name:'芒种',time:'6月5~7日',   src:'/images/24 solar terms/8.jpg',classid:2},
      {id:9,name:'夏至',time:'6月21~22日', src:'/images/24 solar terms/9.jpg',classid:2},
      {id:10,name:'小暑',time:'7月6~8日',  src:'/images/24 solar terms/10.jpg',classid:2},
      {id:11,name:'大暑',time:'7月22~24日',src:'/images/24 solar terms/11.jpg',classid:2},

      {id:12,name:'立秋',time:'8月7~9日',   src:'/images/24 solar terms/12.jpg',classid:3},
      {id:13,name:'处暑',time:'8月22~24日', src:'/images/24 solar terms/13.jpg',classid:3},
      {id:14,name:'白露',time:'9月7~9日',   src:'/images/24 solar terms/14.jpg',classid:3},
      {id:15,name:'秋分',time:'9月22~24日', src:'/images/24 solar terms/15.jpg',classid:3},
      {id:16,name:'寒露',time:'10月8~9日',  src:'/images/24 solar terms/16.jpg',classid:3},
      {id:17,name:'霜降',time:'10月23~24日',src:'/images/24 solar terms/17.jpg',classid:3},

      {id:18,name:'立冬',time:'11月7~8日',  src:'/images/24 solar terms/18.jpg',classid:4},
      {id:19,name:'小雪',time:'11月22~23日',src:'/images/24 solar terms/19.jpg',classid:4},
      {id:20,name:'大雪',time:'12月6~8日',  src:'/images/24 solar terms/20.jpg',classid:4},
      {id:21,name:'冬至',time:'12月21~23日',src:'/images/24 solar terms/21.jpg',classid:4},
      {id:22,name:'小寒',time:'1月5~7日',   src:'/images/24 solar terms/22.jpg',classid:4},
      {id:23,name:'大寒',time:'1月20~21日', src:'/images/24 solar terms/23.jpg',classid:4}
    ]
  },
// 点击切换
  search(e){
    var id = e.currentTarget.id
    var arr = this.data.seasonAll
    var arrs = []
    for(var i=0;i<arr.length;i++){
      if(arr[i].classid == id){
        arrs.push(arr[i])
      }
      if(arr[i].classid == 0){
        arrs.push(arr)
      }
    } 
    this.setData({
      season:arrs
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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