// 1.Write a function which get's an array and an element and returns a array with this
// element at the end
const numbers = [1, 2];
// sol.1 bad coding it will create reference copy which will affect original array
// const appendFunc = (arr, el)=>{
//     arr.push(el)
//     return arr
// }
// const newNumbers = appendFunc(numbers,3)
// console.log(newNumbers);
// console.log(numbers);

// sol.2 this is good approach
// const appendFunc = (arr, el)=>{
//     return [...arr,el]
// }
// const newNumbers = appendFunc(numbers,3)
// console.log(newNumbers);
// console.log(numbers);

// sol.3 this is also good approach
// const appendFunc = (arr, el)=>{
//     const temp = arr.slice()
//     temp.push(el)
//     return temp
// }
// const newNumbers = appendFunc(numbers,3)
// console.log(newNumbers);
// console.log(numbers);

// sol.4 same as 3 sol but with different function
// const appendFunc = (arr, el)=>{
//     const temp = Array.from(arr)
//     temp.push(el)
//     return temp
// }
// const newNumbers = appendFunc(numbers,3)
// console.log(newNumbers);
// console.log(numbers);

// All three of these methods create a new array with the same values as the original array.
// However, note that if the original array contains objects or other reference types, the
// copied array will still reference the same objects, so modifying those objects in one array
// will affect the other. In that case, you may need to use a deep copy approach

//2. write a function which concatenate 2 arrays

// sol.1 bad approach
// const mergeArrays = (arr1, arr2)=>{
//     arr1.push(...arr2)//will mutate original array 1
//     return arr1
// }

// sol. 2 good approach
// const mergeArrays = (arr1, arr2, arr3)=>{
//         // return arr1.concat(...arr2,...arr3)
//         // return [...arr1, ...arr2, ...arr3]
//     }

// const arr1 = [1]
// const arr2 = [2,3]
// const arr3 =[4,5]
// const result = mergeArrays(arr1, arr2,arr3)
// console.log(result, arr1, arr2, arr3);

// 3. Remove all duplicates in the array

// sol.1 using Set()
// const uniqueArr = arr=>{
//     return [...new Set(arr)]
// }
// console.log(uniqueArr([1,2,3,3]));

// sol.2 using forEach()
// const uniqueArr = arr=>{
//     result = []
//     arr.forEach(element => {
//         if(!result.includes(element)){
//             result.push(element)
//         }
//     });
//     return result
// }
// console.log(uniqueArr([1,2,3,3,1]));

// sol.3 using reduce()
// const uniqueArr = arr=>{
//     return arr.reduce((acc, el)=>{
//         return acc.includes(el)? acc : [...acc, el]
//     }, [])
// }
// console.log(uniqueArr([1,2,2,3 ]));


// 4. sort the array by the author name
// const books = [
//   { name: "Harry Potter", author: "Joanne Rowling" },
//   { name: "The Hunger Games", author: "Suzanne Collins" },
//   { name: "Warcross", author: "Marie Lu" },
// ];

// books.sort((book1,book2)=>{
//     const authorLastName1 = book1.author.split(' ')[1]
//     const authorLastName2 = book2.author.split(' ')[1]
//     return authorLastName1<authorLastName2?1 :-1
// })

// console.log(books);

// 5. Closures : Closures are a feature of JavaScript that allows a function to access variables
//  in its outer lexical environment, even after the outer function has returned.
// In other words, a function with reference of its outer environment together forms a closure.
// Closure is combination of a function and its lexical scope bundled together

// const addTo = (passed)=>{
//     const add = (inner)=>{
//         return inner + passed
//     }
//     return add
// }

// console.dir(addTo(5));

// const outerFunction=()=> {
//     const outerVariable = "I am in the outer function";
//     const innerFunction=()=>{
//       console.log(outerVariable);
//     }
//     return innerFunction;
//   }
//   const innerFunc = outerFunction();
//   innerFunc();

// 6. Hoisting : Hoisting is a feature in JavaScript where variable and function declarations
//  are moved to the top of their respective scopes during the compilation phase, before the
//  code is executed. This means that it's possible to use a variable or function before it's
//  declared, without causing an error.
// In another words, variable bubbling to the top of their resp scope

// case1
    // foo = 3;
    // console.log(foo);// output is : 3
    // var foo;
// case2 
    // console.log(foo)// output is : undefined 
    // var foo = 2;
// case3
    // console.log(foo) // output is : foo is not defined
    // foo = 1;

//NOTE: Vars and functions are bubbling to the top. Use let, const and arrow function
//  because they will not bubble to top 

// 7. This and context inside javascript

// class Pet {
//     constructor (name) {
//     this.name = name;
//     }
//     getName= () => this.name;
//     getSurname = function () {
//     this.name;
//     };
//     }
// const cat = new Pet("Fluffy");
// console.log(cat.getName());
// console.log(cat.getSurname());