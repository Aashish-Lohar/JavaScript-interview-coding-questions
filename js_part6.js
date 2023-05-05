//1.create a symbol and use as a key in object but its type will not be changed

const mySym = Symbol('key1')
const user = {
    name:'aashish',
    age:'18',
    location:'udaipur',
    email:'aashish@aashish.com',
    [mySym]:'value1'
}

Object.freeze(user)
user.email = 'aashish@chatgpt.com'
delete user.email

// console.log(user);

// 2. singleton object and literal or non singleton object
let obj = new Object()//singleton object
let obj2 = {} //non-singleton

// 3.let and const are hoisted??
//sol. No let and const are not hoisted but in temporal deadzone

// Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when a variable is declared 
// using let or const within a block scope (i.e., within curly braces {}) but is not yet initialized.
// This variable is said to be in the TDZ until it is assigned a value.

// let and const are stored in different memory not like var which is stored in global scope or
// window object

// During the TDZ, if you try to access the variable, you will get a ReferenceError saying that the
// variable is not defined. This happens because the variable is not yet initialized and thus not
// available for use.

// 4. Use of closures 
// Module design patterns 
// currying
// functions like once
// memoize
// maintaining state in async world
// setTimeouts 
// iterators

// 5. setTimeout + closures

//when we use let in for loop than i is allocated to new reference and value is initialized every 
// time when loops runs and it happens because let is block scoped. In other words it create new copy 
// of i every time loop execute
// function x(){
//     for(let i=1; i<=5; i++){

//             setTimeout(()=>{
//                 console.log(i);
//             }, i*1000)

//     }
//     console.log('hello dev');
// }
// x()

// output : 1 2 3 4 5

// but when we use var at the place of let i has same reference all the time so when loop run it 
// incremented the value of i before setTimeout callback function call
// function x(){
//     for(var i=1; i<=5; i++){

//             setTimeout(()=>{
//                 console.log(i);
//             }, i*1000)

//     }
//     console.log('hello dev');
// }
// x()

// output : 6 6 6 6 6 

// if interviewer asks to achieve the let condition with var in above function 
// function x(){
//     for(var i=1; i<=5; i++){
//         function close(a){
//             setTimeout(()=>{
//                 console.log(a);
//             }, a*1000)
//         }
//         close(i)
//     }
//     console.log('hello dev');
// }
// x()


// 6. make private variable which can't be accessed from outside, with example 

function Counter(){
    var count = 0
    this.increment = ()=>{
        count++
        console.log(count);
    }
    this.decrement = ()=>{
        count--
        console.log(count);
    }
}

var counter1 = new Counter()
counter1.increment()
counter1.decrement()

// 7. disadvantages of closures
// Closures in JavaScript are a powerful and widely used feature, but they do have a few disadvantages:

// Memory Management: Closures can lead to memory leaks if not managed properly. If a closure holds a reference to a large object, it can prevent that object from being garbage collected even after it's no longer needed.

// Performance Overhead: Because closures maintain references to variables outside of their scope, they require more memory and processing power than regular functions. This can become a problem when dealing with large amounts of data or when working with code that needs to be optimized for performance.

// Debugging: Closures can make debugging more difficult because they can create complex chains of references between variables and functions. This can make it harder to track down bugs and errors in code.

// Security: Closures can also be used to create private variables and functions, which can be useful for security purposes. However, they can also be used to create obfuscated code that's difficult to understand or reverse engineer.

// 8. once function : The once function is a common programming pattern used in JavaScript that allows a function to be called only once, regardless of how many times it is invoked. Here's an example implementation of the once function:

// function once(fn) {
//     let called = false;
//     let result;
//     return function() {
//       if (!called) {
//         called = true;
//         result = fn.apply(this, arguments);
//         console.log('result', result);
//       }
//       return result;
//     };
//   }

//   var a=once(()=>console.log('once'))
//   a()
//   a()

//   console.log(a);

//   9.function statement aka function declaration
// function a(){
//     console.log('a called');
// }

// 10. function expression
// var b = function (){
//     console.log('b called');
// }

// 11. anonymous function
// function (){
    
// }
//output : syntax error

// 12. named function expression
// var c= function xyz(){
//     console.log('c called');
// }
// xyz(); //output : xyz is not defined


// 13. diff b/w parameters and arguments
// function abc(param){//it is parameter
//     console.log(param);
// }
// abc('hello')//data passed in a function called is arguments

// 14. first class function in javascript
// In JavaScript, functions are first-class citizens, which means that they can be treated like any other value or data type, such as numbers or strings. Specifically, this means that:

// Functions can be assigned to variables, passed as arguments to other functions, and returned as values from functions.

// Functions can be defined anonymously, without being assigned to a variable.

// Functions can be stored in data structures such as arrays and objects.

// Here are a few examples of how first-class functions work in JavaScript:

// Assigning a function to a variable
// const add = function(a, b) {
//     return a + b;
//   };
  
  // Passing a function as an argument to another function
//   function double(func, num) {
//     return func(num) * 2;
//   }
//   const result = double(add, 5); // result will be 10
  
  // Defining an anonymous function and assigning it to a variable
//   const square = function(x) {
//     return x * x;
//   };
  
  // Storing functions in an object
//   const math = {
//     add: function(a, b) {
//       return a + b;
//     },
//     subtract: function(a, b) {
//       return a - b;
//     }
//   };
  