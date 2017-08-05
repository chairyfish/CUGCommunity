// pages/home/home.js

var app = getApp()  
Page( {  
  data: {  
    /** 页面配置 */  
    winWidth: 0,  
    winHeight: 0,  
    /* tab切换  */
    currentTab: 0,  

    card:{
      imgpath:"/images/icon/测试头像.jpg",
      nickname:"谣言传播者",
      time:"2017-07-12 17:00:00",
      question:"有什么问题是一顿火锅不能解决的？",
      answer:"当然是...没有辣椒没有醋没有麻酱没有蒜泥没有香菜啦",
      detail:"3评论 · 6赞同"
    }  
  },  
  onLoad: function() {  
    var that = this;  
  
    /** 
     * 获取系统信息 
     */  
    wx.getSystemInfo( {  
  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
  
    });  
  },  
  /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  },  
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
  
    var that = this;  
  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  } ,

/**  canvas绘制底部阴影  **/
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onShow: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    // Create linear gradient
    const grd = context.createLinearGradient(0, 0, 0, 80)
    grd.addColorStop(0, 'rgba(255, 255, 255, 0)')
    grd.addColorStop(1, 'rgba(100,100,100, 1)')

    // Fill with gradient
    context.setFillStyle(grd)
    context.fillRect(0, 0, 400, 40)
    context.draw()
  },

  junpToSearch:function(e) {
    wx.navigateTo({
      url: '../search/search'//路径
    })
  },
  jumpToDetail:function(e) {
    console.log("redirect")
    wx.navigateTo({
      url: '../detail/detail'//路径
    })
  }
})  



