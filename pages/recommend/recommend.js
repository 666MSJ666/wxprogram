// pages/recommend/recommend.js
Page({
  /*自己开始写的东西*/
// 添加跳转页面函数
gotoIndex: function(option) {   
  wx.switchTab({      
      url: '/pages/index/index',    //要跳转到的页面路径，注意此时的路径中不要出现文件扩展名，要与app.json中的路径一致
})  
},
gotoSuccessfullyPublished: function(option) {   
  wx.navigateTo({      
      url: '/pages/publishSuccessfully/publishSuccessfully',    //要跳转到的页面路径
})  
},

// picker组件的函数
bindPickerChange: function(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    index: e.detail.value
  })
},
bindDateChange: function(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    date: e.detail.value
  })
},

  /**
   * 页面的初始数据
   */
  data: {
    array: ['京东', '淘宝', '拼多多', '其他'],
    objectArray: [
      {
        id: 0,
        name: '京东'
      },
      {
        id: 1,
        name: '淘宝'
      },
      {
        id: 2,
        name: '拼多多'
      },
      {
        id: 3,
        name: '其他'
      }
    ],

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

