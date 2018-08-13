
Component({
  /**
   *  各种弹出的容器
   * - @author           狄兆璐
   * - @date             2018-06-30
   * 
   * properties
   *  overlay         遮罩层
   *  type        内容从哪个方向出(center,top,bottom,left,right)
   * 
   */
  properties: {
    show: {
      type: Boolean
    },
    showOverlay: {
      type: Boolean,
      value: true
    },
    overlay: {
      type: Boolean,
      value: true
    },
    type: {
      type: String,
      value: 'center'
    }
  },
  methods: {
    closeMask: function () {
      this.triggerEvent('clickMask', {})
    }
  }
})
