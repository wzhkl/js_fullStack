// 会计 计算年终奖
// 绩效 S  5个月
//     A  3
//     B  2
//     C  1
//     D  0
var performanceX = function(salary) {
    return salary * 60;
}
var performanceS = function(salary) {
    return salary * 5;
},
performanceA = function(salary) {
    return salary * 3;
},
performanceB = function(salary) {
    return salary * 2;
},
performanceC = function(salary) {
    return salary * 1;
}
var calculateBounce = function(performanceLevel, salary) {
    if (performanceLevel === 'X') {
        return performanceX(salary);
    }
    if(performanceLevel === 'S'){
        // return salary * 5;
        return performanceS(salary);
    }else if(performanceLevel === 'A') {
        // return salary * 3;
        return performanceA(salary);
    }else if(performanceLevel === 'B'){
        // return salary * 2;
        return performanceB(salary);
    }else if(performanceLevel === 'C'){
        // return salary * 1;
        return performanceC(salary);
    }else (performanceLevel === 'D')
        return 0;
}
// 可以如何优化？ 分支太多，计算策略太简陋
// 会计负责发钱，应该与制定发钱策略的区分开来
console.log(calculateBounce('X',20000));