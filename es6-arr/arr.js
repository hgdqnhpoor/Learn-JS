let arr = [1,2,3,4,5,6,55];
arr.b = 100;// arr.b,b是arr的私有属性
// 1.forEach
// arr.forEach(function ( item ) {// 声明式(不关系如何实现)
//     console.log (item);
// })

// 2.for in
// for (key in arr) {// key会变成字符串类型,包括数组的私有属性也可以打印出来
//     console.log (key);// 0 1 2 3 4 5 b
// }

// 3.for of
// let obj = {qn: 'hgdqnhrich',hobby: 'codding'};
// for(let val of arr){// 支持return,并且是值of数组(不能遍历对象)
//    console.log(val);
// }
// 3-1.for of(可以遍历对象)遍历对象的方法,Object.keys将(对象的key)作为新的数组
// let obj1 = {girl: 'hgdqnhrich',height:'100cm'}
// for (let val of Object.keys(obj1)){
//      console.log(val);// girl height
//      // 如果是变量要用[]
//      console.log(obj1[val])// 有点强制的遍历对象
// }

// es6数组的方法
// 1.filter 是否操作数组:不   返回结果:过滤后的新数组  回调函数的返回结果:如果返回true,表示这一项放到新数组中
// 需求:过滤出>2<5的
// filter用于删除某一项
// let a = [1,2,3,4,5].filter((item,index)=>{
//     // 2<item返回值是布尔类型,不是0,就是1,即使最大是1的话也小于5
//     // 1===1===1(1===1为true,true===1为false)
//     return  item>2&&item<5;
// })
// console.log(a);// [ 3, 4 ]  

// 2.map 映射,将原有数组映射成一个新数组 [1,2,3],
// 需求<li>1</li><li>2</li><li></li>
// 不操作原数组  返回新数组  回调函数中返回什么这一项就是什么
// 用map就是更新数组
// let arr1 = [1,2,3].map((item) => {
//     return `<li>${item}</li>`;// ``是es6中的模板字符串,遇到变量用${}取值
// })
// console.log(arr1.join(''));// [ 3, 6, 9 ]

// 3.includes,返回的是布尔类型
// let b=arr.includes(7)
// console.log(b) // false

//4.find,返回找到的那一项 不会改变原数组 回调函数中返回true表示找到了,找到后停止循环,没找到是undefined
// let c=arr.find((item,index) => {
//       return item.toString().indexOf(20)>-1;
// })
// console.log(c)// 找到符合条件那项就返回出来不找了,找到具体的某一项用find

// some和every是es5的
// 5.some找true,找到true后停止,返回true;some找不到就是false
// let d=arr.some((item,index)=>{
//     return item.toString().indexOf(11)>-1;
// })
// console.log(d)//true

// 6.every找false,找到false后停止,返回false
// let e=arr.every((item,index)=>{
//      return item.toString().indexOf(5)>-1;
// })
// console.log(e)//false，从第一个开始找,第一个1不包含5,就是false

// 7.reduce，reduce有4个参数,数组求和,返回的是叠加后的结果,回调函数返回的结果,原数组不发生变化
// prev代表的是数组的第一项,next是数组的第二项
// 第二次prev是undefined,next是数组的第三项
let f=[1,2,3,4,3].reduce(function(prev,next,index,item){
          console.log(prev,next);
          //return 100// 本次的返回值会作为下一次的prev
          return prev+next;
})
console.log(f);

//转为一维数组
let g = [[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next,index,item){
      return prev.concat(next); 
})
console.log(g)

let h = [{price:10,count:2},{price:11,count:3},{price:2,count:3}].reduce((prev,next,index,item)=>{
    console.log(prev,next)
    // 0是prev,下一项是{price:10,count:2}为next
    return prev+next.price*next.count;
},0)
console.log(h)