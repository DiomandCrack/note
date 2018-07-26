class Person {
  constructor(name,age){
    this.name = name
    this.age = age
  }

  getName(){
    return this.name
  }
}

let p = new Person('JJ')

console.log(p.getName())