var db = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

var request, result, version = 4,
  dbName = 'testDB'
osName = 'os1'

function createDB() {
  request = db.open(dbName, version)

  request.onsuccess = function () {
    db = request.result
    console.log('db open success')
  }

  request.onerror = function (e) {
    console.log(e.currentTarget.error.message)
  }

  request.onupgradeneeded = function () {
    db = request.result
    //检查数据库中是否含有os1
    var store
    console.log('onupgradeneeded')
    if (!db.objectStoreNames.contains(osName)) {
      //没有就创建表
      //主键类型为自增{autoIncrement:true}
      //id字段作为key {keyPath:'id'}
      store = db.createObjectStore(osName, {
        keyPath: 'id'
      })
      //创建索引
      store.createIndex('index', 'id', {
        unique: true
      })
      store.createIndex('hpIndex','hp',{unique:false})
      store.createIndex('categoryIndex', 'category', {
        multiEntry: true
      })
    }
  }
}

createDB()

var data = [{
  name: '史莱姆',
  id: '001',
  hp: 3,
  category: ['怪物', '容易逃跑']
}, {
  name: '小蝙蝠',
  id: '002',
  hp: 5,
  category: ['怪物', '飞行']
}, {
  name: '小恶魔',
  id: '003',
  hp: 9,
  category: ['怪物', '恶魔']
}]

function addData() {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  data.map(function (o) {
    store.add(o)
  })
}

function getData(id) {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var request = store.get(id)
  request.onsuccess = function () {
    console.log(request.result)
  }
}

function getAllData() {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var request = store.getAll()
  request.onsuccess = function () {
    console.log(request.result)
  }
}

function updateData(id) {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var request = store.get(id)
  request.onsuccess = function () {
    request = store.put({
      name: '小猎犬',
      id: id,
      hp: 9
    })
  }
}

function deleteData(id) {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var request = store.delete(id)
  request.onsuccess = function () {
    console.log('delete success', request.result)
  }
}

function clear() {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var request = store.clear()
  request.onsuccess = function () {
    console.log('clear success')
  }
}

function getIndex(id) {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var index = store.index('index')
  var request = index.get(id)
  request.onsuccess = function () {
    console.log(request.result)
  }
}

function indexGetAll() {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var index = store.index('index')
  var request = index.getAll()
  request.onsuccess = function () {
    console.log(request.result)
  }
}

function useCursorGetData() {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var request = store.openCursor()
  //openCursor params
  //rang游标范围,direction游标方向，返回的是IDBRequest对象想·
  //IDBKeyRange.only('002')仅获取002的数据
  //openCursor(null,'prev')逆序遍历
  //upperBound游标上限
  //lowerBound游标下限
  //only仅
  //最后一个参数 为true 为开区间 false 为闭区间
  //bound 指定区间
  //最后二个参数 指定开闭区间
  //direction 参数
  //next 顺序查询（默认）
  //prev 逆序查询
  //nextunique: 顺序唯一查询
  //prevunique: 逆序唯一查询
  request.onsuccess = function () {
    var cursor = request.result
    if (cursor) {
      console.log(cursor.value)
      cursor.continue()
    }
  }
}

function useIndexGetData() {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var index = store.index('categoryIndex')
  var request = index.getAll('飞行')

  request.onsuccess = function () {
    console.log(request.result)
  }
}

function useIndexAndCursorOperteData() {
  var transaction = db.transaction(osName, 'readwrite')
  var store = transaction.objectStore(osName)
  var index = store.index('categoryIndex')
  var request = index.openCursor()

  request.onsuccess = function () {
    var cursor = request.result
    if (cursor) {
      console.log(cursor.value)
      if (cursor.value.id === '002') {
        cursor.update({
          name: '小蝙蝠',
          id: '002',
          category: ['怪物', '飞行', '垃圾'],
          hp: 10
        })
      }
      cursor.continue()
    }
  }
}

function useIndexAndCursorDeleteData() {
  var transaction = db.transaction(osName,'readwrite')
  var store = transaction.objectStore(osName)
  var index = store.index('categoryIndex')
  var request = index.openCursor()

  request.onsuccess = function () {
    var cursor = request.result
    if(cursor){
      if(cursor.value.id==='002'){
        cursor.delete().onsuccess = function () {
          console.log('delete success')
        }
      }
      console.log(cursor.value)
      cursor.continue()
    }
  }
}