- 正则知识点
    贪婪匹配  [0-9]+
    + 前面的字符必须至少出现一次
    * 代表字符可以不出现，也可以出现一次或者多次
    ^ 的第二种用法
    [^>]

- 函数参数
    写一个函数，返回最大的两个数
    [2,6,'a']  [8,4,6] [10]
    返回[10,8]
    1. Math.max 求最大值
    2. ... spread 展开一个数组
    3. 如果是n个数？ slice方法

- args
    1. map + spread 运算符
    2. 闭包
        遍历每一项， map
        取前两个 slice + n + Math.max()
        求最大值 

        callback 取前两个 + 求最大值 作为一个功能
        Math.max.slice(n)