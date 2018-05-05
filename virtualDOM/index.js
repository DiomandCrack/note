function view(count) {
  const r = [...Array(count).keys()]
  return <ul id='filmList' className={`list-${count%3}`}>
    {r.map(n=><li>item {(count*n).toString()}</li>)}
  </ul>
}

function flatten(arr) {
  return [].concat(...arr)//将二维数组扁平为一维数组
}

function h(type,props,...children){
  return {
    type,
    props:props||{},
    children:flatten(children)
  }
}

function render(el) {
  console.log(view())
  el.appandChild(createElement(view()))
}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  let { type, props, children } = node;
  const el = document.createElement(type);
  setProps(el, props);
  children.map(createElement).forEach(el.appendChild.bind(el));//因为thisArg参数 (this) 传给了forEach()，每次调用时，它都被传给callback函数，作为它的this值。
  return el;
}

function setProps(el,props) {
  Object.keys(props).forEach(key=>{
    setProp(el,key,props[key])
  })
}

function setProp(target,name,value){
  if(name==='className'){
    return target.setAttribute('class',value)
  }
  target.setAttribute(name,value)
}