// pages/search/search.js
Page({
  data:{
    isComplete:false,
    card:{
      imgpath:"/images/icon/测试头像.jpg",
      nickname:"谣言传播者",
      time:"3天前",
      question:"有什么问题是一顿火锅不能解决的？",
      answer:"当然是...没有辣椒没有醋没有麻酱没有蒜泥没有香菜啦",
      detail:"3评论 · 6赞同"
    },
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  searchConfirm:function(e){
    var id = e.currentTarget.id; // 获取当前表单元素Id
    var input = e.detail.value; // 获取当前表单元素输入框内容
    if(input) {
        // 不为空
        this.setData({
          isComplete:true
        })
    }else{
        this.setData({
          isComplete:false
        })
    }
  },
  jumpToDetail:function(e) {
    wx.navigateTo({
      url: '../detail/detail?question=666'//路径
    })
  },
})