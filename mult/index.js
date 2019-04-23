function mult(...args) {
    //参数数量是不定的
    let a = 1;
    for (var i = 0; i < args.length; i++) {
        a = a * arguments[i];
    }
    return a;
}
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));