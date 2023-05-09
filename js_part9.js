//1. currying using bind method
// function multiply(x, y) {
//   console.log(x * y);
// }
// multiply(2, 5);

// const multiplyBy2 = multiply.bind(this, 2);
// multiplyBy2(10);
// const multiplyBy3 = multiply.bind(this, 3);
// multiplyBy3(10);

// const multiplyBy4 = multiply.apply(this, [2, 4]);

// 2. Amazon UI frontend question sum(1)(2)(3)(4)......()
// const sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };
// const sum = (a) => (b) => b ? sum(a + b) : a;

// console.log(sum(1)(2)(3)(4)());

// 3. polyfill of bind method
// let name = {
//   firstName: "Aashish",
//   lastName: "Lohar",
// };

// let printName = function (hometown, state, country) {
//   console.log(`${this.firstName} ${this.lastName} ${hometown} ${country}`);
// };

// let printMyName = printName.bind(name, "Udaipur");
// printMyName("Rajasthan", "India");

// Function.prototype.myBind = function (...args) {
//   let obj = this;
//   let params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };

// let printMyName2 = printName.myBind(name, "udaipur");
// printMyName2("Rajasthan", "India");

// 4. polyfill for map

// const num = [1, 2, 4, 5, 6, 6, 7];
// const square = function (n) {
//   return n * n;
// };
// const resultMap = num.map(square);

// console.log("map", resultMap);

// Array.prototype.myMap = function (cb) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(cb(this[i]));
//   }
//   return arr;
// };

// const resultMyMap = num.myMap(square);

// console.log("myMap", resultMyMap);
