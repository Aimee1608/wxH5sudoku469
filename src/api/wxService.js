export default {
  async getUserInfo() {
    let data = await new Promise((resolve, reject) => {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: resolve,
            fail: reject
          })
        }
      })
    })
    return data
  },
  async httpRequest(options = {}) {
    let data = await new Promise((resolve, reject) => {
      switch (options.type) {
        case 0:
          options.url = 'https://stocks.liangplus.com' + options.url.split('/liang')[1]
          break
        case 1:
          options.url = 'http://www.liangplus.com' + options.url.split('/api')[1]
          break;
        default:
          break
      }
      wx.request({
        url: options.url,
        data: Object.assign({}, options.data),
        method: options.methods || 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        success: resolve,
        fail: reject
      })
    })
    return data
  }
}
