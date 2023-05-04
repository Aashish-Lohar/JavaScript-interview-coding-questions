const users = [
  { id: 1, name: "Jack", isActive: true, age: 20 },
  { id: 2, name: "John", isActive: true, age: 18 },
  { id: 3, name: "Mike", isActive: false, age: 30 },
];

//1. Write a code to get array of names from given array of users

// solution1
// const names = []
// for (let i = 0; i < users.length; i++) {
// names.push(users[i].name);
// }

//solution 2
// const names = [];
// users.forEach((user) => {
// names.push(user.name);
// });

// solution 3
// const names = users.map((user) => user.name); //good coding practice
// console.log("names", names);

//2. Write a code to get array of name of active users from given array of users

// const activeUsers = users
//   .filter((user) => user.isActive)
//   .map((user) => user.name);
//   console.log('activeUsers', activeUsers)

// 3. Sort users by age in descending order and first 2 questions also apply

// const sortedByAge = users
//   .sort((user1, user2) => (user2.age < user1.age ? -1 : 1))
//   .filter((user) => user.isActive)
//   .map((user) => user.name);
// console.log(sortedByAge);

// 4. What will be logged in first example and in second example?
// let var1;
// console.log(var1);
// console.log(typeof var1);
// let var2 = null;
// console.log(var2);
// console.log(typeof var2);

// 5. What will be console.logged here (question on HOISTING)
//
// Question 1
// console.log(foo);
// foo = 1;
// question 2
// console.log(foo);
// var foo = 2;
//
// question 3
// foo = 3;
// console.log(foo);
// var foo;

// 6. (Question on closures)Create a counter function which has increment and getValue functionality
// const privateCounter =()=>{
//     let count = 0
//     return {
//         increment:(val=1)=> count+=val,
//         getValue:()=>count
//     }
// }

// const counter = privateCounter()
// console.log('counter', counter.getValue());
// counter.increment()
// console.log('counter', counter.getValue());

// const  privateSecret = ()=>{
//     secret = 'foo'
//     return secret
// }

// console.log(privateSecret());

// 7. (question on currying) Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// const multiply = (num1)=>{
//     return (num2)=>{
//         return num1*num2
//     }
// }
// const multiply = (num1)=>(num2)=>num1*num2
// console.log(multiply(5)(3));

// 8. create a curry function
// const curry = function (fn) {
//   var arity = fn.length;
//   console.log("arity", arity);
//   return function f1(...args) {
//     if (args.length >= arity) {
//       console.log("enough arguments", args);
//       return fn(...args);
//     } else {
//       console.log("need more args");
//     return function f2(...moreArgs){
//         var newArgs = args.concat(moreArgs)
//         return f1(...newArgs)
//     }}
//   };
// };

// const curriedSum = curry((a, b, c) => a + b + c);
// const partiallyCurriedSum = curriedSum(1)
// console.log(partiallyCurriedSum( 2, 3));
// console.log(curriedSum( 1)(2)(3));

// 9. What can your curried function do?

// const get = curry((property, object)=>object[property])
// get('id',{id:1})
// const getId = get('id')
// getId({id:1})


// 10. check that user with such name exists in array of objects
// don't use for loop for this its bad approach

// sol.1 using arr.some()
// const isNameExists = (name, arr)=>arr.some((el)=>el.name===name)
// console.log(isNameExists('John',users));

// sol.2 
// const isNameExists = (name, arr)=>{
//     const el = arr.find(user=>user.name===name)
//     return Boolean(el)
// }
// console.log(isNameExists('John',users));

//sol.3
// const isNameExists = (name, arr)=>{
//     const el = arr.findIndex(user=>user.name===name)
//     return Boolean(el)
// }
// console.log(isNameExists('John',users));


