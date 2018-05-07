var db = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

var request,result,version=3,
  dbName='testDB'
  osName='os1'

  function createDB() {
    request = db.open(dbName,version)
    
    request.onsuccess = function () {
      db = request.result
      console.log('db open success')
    }
    
    request.onerror = function(e){
      console.log(e.currentTarget.error.message)
    }

    request.onupgradeneeded = function () {
      db = request.result
      //检查数据库中是否含有os1
      console.log('onupgradeneeded')
      if(!db.objectStoreNames.contains(osName)){
        //没有就创建表
        //主键类型为自增{autoIncrement:true}
        //id字段作为key {keyPath:'id'}
        db.createObjectStore(osName,{keyPath:'id'})
      }
    }
  }

  createDB()

  var data = [{
    name:'史莱姆',
    id:'001',
    hp:3
  },{
    name:'小蝙蝠',
    id:'002',
    hp:5
  },{
    name:'小恶魔',
    id:'003',
    hp:9
  }]

  function addData() {
    var transaction = db.transaction(osName,'readwrite')
    var store=transaction.objectStore(osName)
    data.map(function (o) {
      store.add(o)
    })
  }

  function getData(id){
    var transaction = db.transaction(osName,'readwrite')
    var store = transaction.objectStore(osName)
    var request = store.get(id)
    request.onsuccess = function (){
      console.log(request.result)
    }
  }

  function getAllData() {
    var transaction = db.transaction(osName,'readwrite')
    var store = transaction.objectStore(osName)
    var request = store.getAll()
    request.onsuccess = function () {
      console.log(request.result)
    }
  }

  function updateData(id){
    var transaction = db.transaction(osName,'readwrite')
    var store = transaction.objectStore(osName)
    var request = store.get(id)
    request.onsuccess = function () {
      request = store.put({
        name:'小猎犬',
        id:id,
        hp:9
      })
    }
  }

  function deleteData(id){
    var transaction = db.transaction(osName,'readwrite')
    var store = transaction.objectStore(osName)
    var request = store.delete(id)
    request.onsuccess = function () {
      console.log('delete success',request.result)
    }
  }

  function clear () {
    var transaction = db.transaction(osName,'readwrite')
    var store = transaction.objectStore(osName)
    var request = store.clear()
    request.onsuccess = function () {
      console.log('clear success')
    }
  }