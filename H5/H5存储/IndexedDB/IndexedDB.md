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
`{autoIncrement:true}`主键类型为指针
