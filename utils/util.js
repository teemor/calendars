const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formateDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('/')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 绑定备忘并显示
let requestList = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://localhost:3000/model',
      method: 'get',
      success(res) {
        res.statusCode === 200 ? resolve(res.data) : reject(res.data);
      },
      fail(res) {
        reject(res)
        wx.showToast({
          title: '服务器抢救中',
          icon: 'none'
        })
      }
    })
  })
}


module.exports = {
  formatTime: formatTime,
  formateDate: formateDate,
  requestList: requestList
}
