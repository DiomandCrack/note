# vue

template下只能有一个父级

## 动态绑定css类名

```vue
<div :class="[btnClass,cname]">
</div>
```

## 组件

组件里的data 一定要返回一个对象
(Object.defineProperty)

### 属性传递

```js
export default {
    props:{
        cname:{
            type:String,
            default:"",
        },
    },
    data(){
        return{
            btnClass:"btn",
        }
    },
}
```

#### 插槽-slot

实现两个标签中间文本

通过html插入文本