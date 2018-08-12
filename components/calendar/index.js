Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date: String
  },

  data: {
    monthName: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    dayName: ['日', '一', '二', '三', '四', '五', '六'],
    dateFormat: 'yyyy-mm-dd' //自定义格式化日期
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getThisMonthDays(year,month){
      return new Date(year,month,0).getDate();
    }
  }
})
