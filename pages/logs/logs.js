
const util = require('../../utils/util.js')

Page({
  data: {
    dayName: ['日', '一', '二', '三', '四', '五', '六'],
    model: [
      { day: 1, isremark:["今天去拔智齿","今天去吃海鲜","吃完海鲜去看电影","看完电影旅行","旅行之后去躺着","呵呵呵呵"] },
      { day: 12, isremark: ["今天去拔智齿"] },
    ]
  },
  onLoad: function () {
    this.setData({
      date: util.formateDate(new Date())
    })
    this.goToday()
    this.getAllDate()
  },
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  getDayOfWeek(year, month, date) {
    return new Date(Date.UTC(year, month - 1, date)).getDay();
  },
  // 生成日期
  getAllDate() {
    let firstWeek = this.getDayOfWeek(this.data.thisyear, this.data.thismonth, 1)
    let monthDay = this.getThisMonthDays(this.data.thisyear, this.data.thismonth)
    let prevMonth = this.getThisMonthDays(this.data.thisyear, this.data.thismonth - 1)
    //当前月最后一天是几号，是星期几
    let endWeek = this.getDayOfWeek(this.data.thisyear, this.data.thismonth, monthDay)
    let nextMonthDay = []
    for (let i = 1; i <= 6 - endWeek; i++) {
      nextMonthDay.push(i)
    }
    let startDay = prevMonth - firstWeek
    let prevMonthDay = []
    // 前一个月的空位
    for (let i = startDay + 1; i <= prevMonth; i++) {
      prevMonthDay.push(i)
    }
    let day = [];
    // 本月
    for (let i = 1; i <= monthDay; i++) {
      day.push({ day: i })
    }
    this.mergeArr(day, this.data.model)
    // 后一个月的空位
    this.setData({
      startArr: prevMonthDay,
      nextMonthDay: nextMonthDay
    })
  },
  // 操作月份
  handleMonth(e) {
    let handle = e.currentTarget.dataset.handle
    if (handle === "prev") {
      this.setData({
        thismonth: this.data.thismonth - 1
      })
      this.getAllDate()
    } else {
      this.setData({
        thismonth: this.data.thismonth + 1
      })
      this.getAllDate()
    }
  },
  //　操作年份
  handleYear(e) {
    let handle = e.currentTarget.dataset.handle
    if (handle === "prev") {
      this.setData({
        thisyear: this.data.thisyear - 1
      })
      this.getAllDate()
    } else {
      this.setData({
        thisyear: this.data.thisyear + 1
      })
      this.getAllDate()
    }
  },
  // 初始化
  goToday() {
    let date = new Date();
    let thisyear = date.getFullYear()
    let thismonth = date.getMonth() + 1
    let today = date.getDate()
    this.setData({
      today: today,
      thisyear: thisyear,
      thismonth: thismonth
    })
    this.getAllDate()
  },
  // 数组合并去重方法
  mergeArr(arr1, arr2) {
    let daya = {}
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr1[j].day === arr2[i].day) {
          arr1[j].isremark = arr2[i].isremark
        }
      }
    }
    this.setData({
      day:arr1
    })
  }
})
