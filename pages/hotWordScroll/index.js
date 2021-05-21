// pages/hotWordScroll/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [
      { title: "朋友圈" },
      { title: "文章" },
      { title: "公共号" },
      { title: "小程序" },
      { title: "音乐" },
      { title: "表情" },
      { title: "订阅号" }],
      index:0,
  },
  //改变索引
  changeIndex(e){
    this.setData({
      index:e.detail.current
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