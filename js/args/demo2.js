// 1. userObj 一个参数带来了新的问题，代码的函数编写者
// ，user 里面的key 要去了解只需要用一部分，解构可以帮助，提高代码可读性

function information({name, age, height}) {
    console.log(name,age,height);
}

const user = {
    name: '小康',
    age: 22,
    height: 2.5,
    sex: '男',
    hobbies: ['打游戏']
}

console.log(information(user));