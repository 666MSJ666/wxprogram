// pages/addcomment/addcomment.js
Page({

  /**
   * 页面的初始数据
   */

  gotoIndex: function(option) {   
    wx.switchTab({      
        url: '/pages/index/index',    //要跳转到的页面路径，注意此时的路径中不要出现文件扩展名，要与app.json中的路径一致
  })  
  },
  gotoSuccessfullyComment: function(option) {   
    wx.navigateTo({      
        url: '/pages/commentSuccessfully/commentSuccessfully',    //要跳转到的页面路径
      })  
    },
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})