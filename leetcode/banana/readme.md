蜗牛爱吃香蕉

N piles bananas  每pile bananas上有不同数量的bananas

[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一 pile 里的 n 只香蕉，规定 H 小时内吃完，吃每把的时候，要不就是吃 m 只，要不就是吃余下的

koko bananas
- 把香蕉吃完函数 canEatAllBananas
    h 来自于吃法规则   一小时 mid , 一次只吃一把 
    return h >= H;
- while 去疯狂的试
从 1，2，3，4，5，6，7...... Math.max(...piles)
能拿到结果，但是太慢了
从最大的试吗？
从中间  最大概率最快的， 二分查找
二分查找优化查找的效率

简单查找 时间开销是n
二分查找的写法有规律
x   y 要找最小可以的min  可以优化
找中间 mid = x + ((y-x) >> 1), 小了
mid + 1 新的X
大了 mid-1 新的Y
log2N