// 1. Elvis operator-- optional chaining
// const baz = foo?foo.bar: 'deafult'
// const baz = foo?.bar || 'deafult'
// const foo = {
//     name:'a',
//     age:'25'
// }
// console.log(foo?.job);

// 2. apply, call and bind method

let userDetails = {
  name: "Aashish Lohar",
  age: 25,
  Designation: "Software Engineer",
  printDetails: function () {
    console.log(this.name);
  },
};

let printNameAndAge = function (state, country) {
  console.log(`${this.name} ${state} ${country}`);
};

// userDetails.printDetails();
let userDetails2 = {
  name: "Himank Kumawat",
  Age: 29,
  Designation: "Software Engineer",
};
// function borrowing
// userDetails.printDetails.call(userDetails2);
// printNameAndAge.call(userDetails, "Rajasthan", "India"); //call method
// printNameAndAge.apply(userDetails, ["Rajasthan", "India"]); //apply method
let newFun = printNameAndAge.bind(userDetails2, "Rajasthan", "India"); //bind method
// newFun();

// 3. Map, Set, WeakSet, WeakMap

//Set : It Contains only unique values
// Object construtor
let myArray = [1, 2, 3, 4];
let obj = new Set(myArray);
obj.add(5);
obj.add(5);
obj.delete(5);
// console.log(obj)
var obj1 = { name: "Aashish" };
obj.add(obj1);
// console.log(obj)
// console.log(obj.has (10))

//Map : object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.
const map1 = new Map([
  ["a", "aashish"],
  ["b", "vidya"],
]);
map1.set("c", "nitya");
// console.log(map1.keys());
// console.log(map1.keys());
for (let [key, value] of map1) {
  // console.log(`key ${key}, value ${value}`);
}
// map1.forEach((value, key)=>console.log(`${key } ${value}`))

//WeakSet: is used to store a collection of objects. It adapts the same properties of that
//  of a set i.e. does not store duplicates. The major difference of a WeakSet with a set
//  is that a WeakSet is a collection of objects and not values of some particular type.
var weakSetObject = new WeakSet();
var objectOne = {};
var objectTwo = {};

// add(value)
weakSetObject.add(objectOne);
// console.log("objectOne added");
weakSetObject.add(objectTwo);
// console.log("objectTwo added");

// has(value)
// console.log("WeakSet has objectTwo : " + weakSetObject.has(objectTwo));

// delete(value)
weakSetObject.delete(objectTwo);
// console.log("objectTwo deleted");
// console.log("WeakSet has objectTwo : " + weakSetObject.has(objectTwo));


//WeakMap

let wm = new WeakMap()
let ob = {name:"Aashish"}
let ob1 = {}
wm.set(ob,"Lohar")
wm.set(ob1,'hello')
wm.set(ob1,ob)
// console.log(wm.get(ob1));


// 4.Hoisting

// test()
// test2()
// test3()
// console.log(a);
// var a = 5

// var b
// console.log(b);//output:
// b=4

// c=4
// console.log(c);//output: 4
// var c

// function test(){
//     console.log('helllllo');
// }
// var test3 = function(){
//     console.log('hiiii');
// }
// const test2=()=>{
//     console.log('helllllo');
// }

// 5. infinite currying

function add(a){
    return function(b){
        if(b) return add(a+b)
        return a
    }
}

// console.log(add(1)(2)(3)(4)(5)());

// 6. Memoization : is an optimization technique that can be used to reduced time consuming
//  calculations by saving previous input to something called cache and returning the result from it


// fibbonacci series
// const fib = (n, memo) => {
//     memo = memo || {}

//     if (memo[n]) return memo[n]

//     if (n <= 1) return 1
//     return memo[n] = fib(n-1, memo) + fib(n-2, memo)
// }
const fib = (n) => {
    if(n==1)return 0;
    if (n == 2)return 1;
    else{
        return fib(n - 1) + fib(n - 2)
    }
  }


let sum = 0
const calc =(n)=>{
    for(let i=0; i<=n;i++){
        sum+=i
    }
    return sum 
}

const sumWithRescursion = (n)=>{
    if(n==1){

        return 1 
    }
    else return n + sumWithRescursion(n-1) 
}

// console.log(sumWithRescursion(15), calc(15));


//   memoization function 
const memoize = (fun)=>{
    let cache = {}
    return function(...args){
        let n = args[0]
        if(n in cache){
            console.log('cache');
            return cache[n]
        }
        else{
            console.log('calculating first time');
            let result = fun(n)
            cache[n] = result
            return result
        }
    }
}


console.time()
const efficient = memoize(fib)
console.log(efficient(8));
console.timeEnd()
console.time()
console.log(efficient(8));
console.timeEnd()
