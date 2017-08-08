// pages/answer/answer.js
Page({
  data:{
    winWidth: 0,  
    winHeight: 0,
  },
  onLoad:function(options){
    this.setData({
      question: options.question
    })  
    /** 
     * 获取系统信息 
     */  
    var that = this;  
    wx.getSystemInfo( {  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
    }); 
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  jumpToDetail:function(e){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  }
})