// function Person(name) {
//   this.name = name;
// }
// let p = new Person('wn')
// 1. p.__proto__ 等于 Person.prototype
// 2. Person.__proto__ 等于 Function.prototype
// 实例的隐式原型链__ptoto__等于其构造函数的显示原型链prototype

// var foo = {},
//     F = function() {};

// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)  // valA
// console.log(F.a)  // valA
// console.log(F.b)  // valB

// function Person(name) {
//   this.name = name;
//   return {}
// }
// let p = new Person('wn')
// console.log(p)

// 构造函数是不需要返回值的，使用new来创建对象时，
// 如果return的是非对象类型，会忽略返回值（return null 也会忽略返回值）

// function Person(name) {
//   this.name = name
// }
// function Student() {

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student
// let s = new Student('wn')
// console.log(s instanceof Person) // true

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)  // 0，1，2，3······9
//   }, 0);
// }
// for (var i = 0; i < 10; i++) {
//   ( function(i) {
//     setTimeout(() => {
//       console.log(i)  // 0，1，2，3······9
//     }, 0)
//   } )(i);
// }
// -- let 每次循环会生成一个封闭的作用域和setTimeout绑定，而 var 每次循环会覆盖上一次的作用域

Array.prototype.method = function() {
  // console.log('wn')
}
var myArr = [1,2,3,4,5,6,7]
myArr.name = 'wn'
for (let index in myArr) {
  // console.log(index)  // 0,1,2,3,4,5,6
  // console.log(myArr[index]) // 1,2,3,4,5,6,7
}
for (let index of myArr) {
  // console.log(index) // 1,2,3,4,5,6,7
}
// for in 
  // 1. index 索引为字符串型的数字 不能直接进行几何运算
  // 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
  // 3. 使用 for in 会遍历数组所有可枚举属性，包括原型链 所以for in 适合遍历对象

// for of
  // 1. for in 遍历的是数组的索引，而for of 遍历的是数组的元素
  // 2. for of 遍历的是数组内的元素，而不包括数组的原型属性和索引

let gArr = [1, 2, [3, 4], 5, [2, 7, [3, 9]]]
let oArr = []

// function outputArr(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//       res = res.concat(outputArr(arr[i]))
//     }else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  }, [])
}
console.log(outputArr(gArr))