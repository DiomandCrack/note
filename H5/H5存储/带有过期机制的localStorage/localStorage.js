;
(function () {
  var ls = window.localStorage

  function oops() {
    return console.warn('your browser is not supported localStorage API')
  }

  function getItem(key) {
    var data = ls.getItem(key)
    data = JSON.parse(data) || {}

    if (data.time === 0) {
      return data.value
    } else if (Date.now() > data.time) {
      ls.removeItem(key)
      return ''
    } else {
      return typeof data.value !== 'undefined'?data.value:''
    }
  }

  function setItem(key, value, time) {
    if (typeof key === 'undefined') {
      return
    }

    var data = {
      //过期时间 如果不设置或设置为0 则没有过期时间
      time: time ? Date.now() + time : 0,
      value: value
    }
    data = JSON.stringify(data)
    try {
      ls.setItem(key, data)
    } catch (error) {
      //如果存储空间不足 则先清空 再存储数据
      ls.clear()
      ls.setItem(key, data)
    }
  }

  function removeItem(key) {
    ls.removeItem(key)
  }

  function clear() {
    ls.clear()
  }

  window.cacheStorage = {
    getItem: ls ? getItem : oops,
    setItem: ls ? setItem : oops,
    removeItem: ls ? removeItem : oops,
    clear: ls ? clear : clear,
  }
})()