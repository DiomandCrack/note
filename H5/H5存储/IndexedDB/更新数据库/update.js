var db = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

var requeset,result,version=1,
  dbName='testDB'
  osName='os1'

  function createDB() {
    request = db.open(dbName,version)
    
    request.onsuccess = function () {
      db = request.result
    }
    
    request.onerror = function(e){
      console.log(e.currentTarget.error.message)
    }

    request.onupgradeneeded = function () {
      db = request.result
      //检查数据库中是否含有os1
      if(!db.objectStoreNames.contains(osName)){
        //没有就创建表
        //主键类型为指针
        db.createObjectStore(osName,{autoIncrement:true})
      }
    }
  }

  createDB()
