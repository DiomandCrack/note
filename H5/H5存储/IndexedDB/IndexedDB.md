# IndexedDB数据库 

1. IndexedDB事务型数据库
2. 是NoSQL数据库
3. 使用JS对象存储数据

## 创建indexedDB

```js
indexedDB.open(key,version)
```

`key`是数据库的名称
`version`数据库的版本号
返回值是`IDBOpenRequest`对象

## 删除数据库

```js
indexedDB.deleteDatabase(key)
```

## 创建表

```js
indexedDB.createObjectStore(osName,{autoIncrement:true})
```

`osName`表的名称
`{autoIncrement:true}`主键类型为自增

## 表的增删改查

### 事务 IDBTransaction

调用`indexedDB.transaction`方法会返回一个`IDBTransaction`对象，它含有一个`objectStore`方法
可以让用户通过指定模式获取 `objectStore`

### 创建数据

```js
//改写表的读取方式 默认是只读 osName 可以是个数组 批量修改读取模式 返回值为IDBTransaction对象
var transaction = db.transaction(osName,'readwrite')
//找到表
store=transaction.objectStore(osName)
//添加数据
store.add({a:1})
```
~~所有方法的返回值都是IDBOpenRequest对象~~

### 获取数据

```js
const request = store.get(id)
const {result} = request
```

使用 `IDBRequest.onsuccess`绑定查询完成事件
使用 `IDBRequest.result` 获取查询结果
使用 `IDBRequest.onerror` 获取失败结果

设置自增主键 - `{autoIncrement:true}`
取数据中字段作为主键 - `{keyPath:字段名}`

## 索引

### 创建索引

```js
IDBObjectStore.createIndex(indexName,keyPath,optionParameters)
```

- `indexName`索引名称
- `keyPath` 索引字段，可以为空或者数组
- `optionParameters` 索引配置参数
    - `unique`表示`keyPath`是否唯一
    - `multiEntry`表示是否为 `keyPath` 字段的每一项建立一条索引数据

### 索引的方法

1. 查询数据

```js
IDBIndex.get(id)
```

2. 查询所有的数据

```js
IDBIndex.getAll()
```