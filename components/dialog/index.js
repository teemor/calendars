
Component({
  /**
 *  弹出对话框
 * - @author           狄兆璐
 * - @date             2018-06-30
 * 
 * properties
 *  show        是否显示
 * 
 */
  properties: {
    show: {
      type: Boolean
    },
    phoneList: {
      type: Array
    }
  },
  data: {

  },
  methods: {
    clickMask:function(){
      this.setData({
        show: false
      })
      this.triggerEvent('clickMask')
    }
  }
})
