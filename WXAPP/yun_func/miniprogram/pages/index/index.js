Page ({
  http: function () {
    // 手机本地端的
    // 从本地到云端
    // 上传到云
    wx.cloud.callFunction({
      name: 'http'
    })
    .then(res => {
      console.log(res);
    })
  }
})