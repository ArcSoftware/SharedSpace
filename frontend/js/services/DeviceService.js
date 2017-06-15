module.exports = {
  name : "DeviceService",
  func : function () {

    return {
      getDevice: function () {
        if (window.innerWidth > 500) {
          return 'desktop';
        } else {
          return 'mobile';
        }
      },
    }
  }
}