var db = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

var requeset,result,version=1,
  dbName='testDB'
  osName='objectStore'

  function createDB() {
    request = db.open(dbName,version)
    
    request.onsuccess = function () {
      db = requeset.result
    }
    
    request.onerror = function(e){
      console.log(e.currentTarget.error.message)
    }

    request.onupgradeneeded = function () {
      db = request.result
      console.log('upgradeneeded')
    }
  }

  createDB()
