// pages/detail/detail.js
Page({
  data:{
    card:{
        imgpath:"/images/icon/测试头像.jpg",
        question:"周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？周黑鸭为什么这么黑？",
        detail:"长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本",
        isExpanded:false,
        followed:false,
        follower:7,
        comment:8,
        read:"230",
      },
    answeramount:4,
    isUpvote:false,
    upvote:"8赞同"
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
        'card.follower':this.data.card.follower-1
      })
      wx.showToast({
        title: '取消关注',
        icon: 'success',
        duration: 300
      });
    }else{
      this.setData({
        'card.followed':true,
        'card.follower':this.data.card.follower+1
      })
      wx.showToast({
        title: '成功关注',
        icon: 'success',
        duration: 300
      });
    }
  },
 upvote:function (e){
    if(this.data.isUpvote==true){
        this.setData({
          isUpvote:false,
          upvote:"8赞同"
        })
    }else{
        this.setData({
          isUpvote:true,
          upvote:"9已赞同"
        })
    }
  },
  jumpToComment:function(e) {
    wx.navigateTo({
      url: '../comment/comment'//路径
    })
  },
  jumpToAnswer:function(e) {
    wx.navigateTo({
      url: '../answer/answer?question='+this.data.card.question//路径
    })
  },
  

})
