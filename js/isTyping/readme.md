类型检测是js的考点

<!-- new Array() [] -->
Object 
Array 可遍历的对象 for(i)
JSON object 对象字面量 可枚举的对象  for(key in)
function 是一等对象  

typeof 不靠谱

1. Object.prototype.toString() 用来弥补typeof，对[]的判断，
返回值"[object Object]"

2. 借给Array用 Object.prototype.toString.call([])  函数上就有call, 动态指定内部this的指向

3. js 的面向对象
    Type{isString}

4. 立即执行函数 + 嵌套函数定义   闭包
type 就在这些嵌套函数被调用是可以引用到