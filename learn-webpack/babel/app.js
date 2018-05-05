
let fuc=()=>{};

const num = 45;

let arr = [1,2,4];

let arrB = arr.map(item=>item*2);

const arrC = arrB.concat(arr,num)

console.log(arrB.concat(arr,num));

console.log(new Set(arrC));

function* app(){
    console.log(1)
}