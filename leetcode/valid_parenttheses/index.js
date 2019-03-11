let arr = []; //数据的集合
arr.push("{");
// console.log(arr, arr.length);
// console.log(typeof arr);
arr.push("}");
// console.log(arr);
arr.pop(); //从末尾删除一个元素
// console.log(arr);
arr.unshift("]"); //插入一个元素到头部
console.log(arr);
arr.shift(); //移除下标为0的第一个元素
console.log(arr);
arr.forEach(item => {
    console.log(item);
})

//如何来做匹配规则
let obj = {};
obj["{"] = "}";
obj["("] = ")";
obj["["] = "]";
// "()"; sta[0] = "("  ")"
let sta = ["("];
let s = ")";
if (obj[sta[sta.length-1]] === s) {
    sta.pop();
}
console.log(!sta.length);