// pages/detail/detail.js
Page({
  data:{
    card:{
        imgpath:"/images/icon/测试头像.jpg",
        question:"周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？",
        detail:"长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本",
        isExpanded:false,
        followed:false,
        follower:"7",
        comment:"8",
        read:"230",
      }

  },

  onLoad:function(options){
    this.setData({
      question: options.question
      

      
    })
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
  expand:function (e){
    this.setData({
      'card.isExpanded':true,
    })
  },

  followQuestion:function (e){
    if(this.data.card.followed==true){
      this.setData({
        'card.followed':false,
      })
      wx.showToast({
        title: '取消关注',
        icon: 'success',
        duration: 300
      });
    }else{
      this.setData({
        'card.followed':true,
      })
      wx.showToast({
        title: '成功关注',
        icon: 'success',
        duration: 300
      });
    }
  },

})
