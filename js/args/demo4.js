const err = (message) => {
    throw new Error(message)
}

function sum(num = err('first param is not defined'), otherNum = err('second param is not defined')) {
    return sum();
}
// sum(1,2) -> 3
// sum(undefined,10) -> 报错 报错第一个参数没有定义
// sum(10) -> 报错 第二个参数没有定义
console.log();