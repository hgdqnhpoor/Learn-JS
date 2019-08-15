// 箭头函数没有this和arguments,自己没有this,就向上一级查找

// 如何更改this指向
//1) call apply bind
//2) var that = this;// 改变this指向
//3 箭头函数改变this指向

// 如何确定this是谁 看谁调用的 点前面是谁this就是谁
// 需求改写为es6
// function a(b) {
//     return b+1;
// }

// 改写后的箭头函数
//let a = b => b+1;// 去掉function关键字,参数有一个可以省略小括号 小括号和大括号之间有一个箭头 如果没有大括号则直接是返回值 有大括号必须写return

// 把函数改写成es6的写法
// function a(b) {
//     return function (c) {
//         return b+c;
//     }
// }
// console.log(a(1)(2));// 3


// 改写后的es6写法
// let a = b => c => b+c;// 两个函数以上的叫高阶函数(两个箭头及以上的包括两个箭头都叫高阶函数)
// a(1)(2);// 3

// 闭包会产生一块不销毁的作用域会造成内存泄漏,函数执行的一瞬间叫闭包,(不销毁的作用域),当执行后返回的结果必须是引用数据类型,而且外界还有变量接收,此时这个函数不会销毁,闭包有(模块化),保护私有变量不受外界干扰
// 此处讲到不销毁的作用域,外边有变量result接收,并且有return,a()之后就会形成不销毁的作用域,function (c) {return b+c}就不会销毁,外层的函数也不会销毁
let result = function (b){
    return function (c) {
        return b+c;
    }
}()