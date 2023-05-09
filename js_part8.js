//1. What is callback function in javascript?
// A callback function in JavaScript is a function that is passed as an argument to another function and is intended to be called by that function at a later time or under specific conditions. In other words, the function being passed as an argument is a "callback" to the calling function, which will invoke it when appropriate.

// Callbacks are commonly used in asynchronous programming, where the flow of execution is not linear, and the order in which functions are called cannot be predicted

// 2. Attach eventlistener to button using closure
// function attachEventListeners(){
//     let count = 0;
//     document.getElementById('myBtn').addEventListener('click',()=>{
//         console.log('button clicked',++count);
//     })
// }

// attachEventListeners()


// 3. WebApis are not part of javascript
// setTimeout
// setInterval
// Dom APIs
// fetch()
// localStorage
// console
// location
// XMLHttpRequest (XHR) API

// 4. what will go in microtask queue
// All the callback which comes through promises and mutation observer will go in microtask queue, Else all other will go in callback queue or task queue
// Microtask queue has higher priority than callback queue 


// 5. Starvation 
// starvation can occur when a long-running or resource-intensive task is executed on the main thread, preventing other tasks from being executed in a timely manner. This can lead to a degradation in performance and user experience, as the application becomes unresponsive or slow to respond to user input.

// JavaScript is a single-threaded language, meaning that it can only execute one task at a time on the main thread. This thread is responsible for executing all JavaScript code, as well as handling user input, updating the DOM, and other tasks related to the browser or environment in which the code is running.

// To avoid starvation in JavaScript, it is important to use asynchronous programming techniques, such as callbacks, promises, or async/await, to handle long-running or resource-intensive tasks in a way that allows the main thread to continue processing other tasks. 

// 6. Event loop
// To avoid blocking the main thread, JavaScript uses a system of callbacks and an event loop to handle asynchronous code execution. When an asynchronous operation is initiated, such as a network request or a timer, the JavaScript engine registers a callback function to be executed when the operation completes. This callback function is added to a task queue, which is managed by the event loop.

// The event loop continuously checks the task queue for new tasks to execute. When a task is found in the queue, the event loop pops it off the queue and executes it on the main thread. This process continues until the task queue is empty, at which point the event loop waits for new tasks to be added.

// 7.Micro task queue
// the micro task queue is a queue that is used to handle micro tasks. Micro tasks are a type of task that are scheduled to be executed as soon as possible, after the current execution context has finished running, but before the browser has a chance to repaint the screen.

// Micro tasks are often used to handle asynchronous operations that require immediate attention, such as Promise resolutions, MutationObserver callbacks, and other API callbacks that are executed asynchronously but require immediate attention.

// When a micro task is scheduled to be executed, it is added to the micro task queue. The event loop checks the micro task queue after each task on the call stack has completed. If the micro task queue is not empty, the event loop starts executing tasks from the micro task queue until it is empty before moving on to the next task in the regular task queue.

// 8. Garbage collector in javascript use Mark and Sweep algo to clear memory in memory heap

// 9. Who created javascript?
// Brendan Eich is an American computer programmer and technology executive. He created the JavaScript programming language and co-founded the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.

// 10. Google's V8 engine is written in c++

// 11. How js engine process js code?
// js code --> parsing(AST==Abstract syntax tree) --> compilation --> execution
// JS uses JIT(just in time) compilation.
// JIT uses interpreter and compiler to execute the code


// 12. Mark and sweep algorithm
// In JavaScript, the "mark and sweep" algorithm is a garbage collection algorithm used to automatically manage memory allocation and deallocation. It is used to identify and clean up memory that is no longer being used by the program.

// The algorithm works by marking all objects that are reachable from the root object (usually the global object in the case of JavaScript) as "live", and then sweeping through the memory to identify and delete any objects that are not marked as "live". The algorithm is called "mark and sweep" because it consists of two main phases:

// Mark phase: The algorithm starts by marking all objects that are reachable from the root object. It does this by traversing the object graph starting from the root object, and marking all objects that it encounters as "live".

// Sweep phase: Once all live objects have been marked, the algorithm sweeps through the memory to identify and delete any objects that are not marked as "live". This frees up memory that can be reused by the program.


//13. Google's V8 engine
// interpreter name is IGNITION
// compiler name is TURBO
// garbage collector name is ORINOCO, oilpan

// 14. Google's V8 engine architecture
// JS source code --> parser --> AST --> Interpreter IGNITION --> step a,b
// a) Interpreter IGNITION --> Compiler turbo fan --> optimized machine code --> Byte code
// b) Interpreter IGNITION --> Byte code

// 15. JS runtime environment consists of 
// In browser or node.js
// JS engine, api, eventloop, callback queue, microtask queue, 


const users = [
    { id: 1, name: "Jack", isActive: true, age: 20 },
    { id: 2, name: "John", isActive: true, age: 18 },
    { id: 3, name: "Johnny", isActive: false, age: 30 },
    { id: 4, name: "Aashish", isActive: true, age: 25 },
    { id: 5, name: "Daniel", isActive: true, age: 30 },
    { id: 6, name: "David", isActive: false, age: 20 },
  ];

//   const output = users.reduce((acc, curr)=>{
//     console.log(curr.age);
//     if(acc[curr.age]){
//         acc[curr.age]+=1
//     }
//     else{
//         acc[curr.age] = 1
//     }
//     return acc
//   }, {})

// const output = users.reduce((acc, curr)=>{
//     if(curr.age< 30){
//         acc.push(curr.name)
//     }
//     return acc
// }, [])

//   console.log(output);

// 16. Issues we face while using callbacks
// a) callback hell also called as Pyramid of doom
// b) inversion of control

// 17. What is promise?
// A promise is an object represeting eventual completion or failure of an asynchronous operation.

// Promises have several advantages over traditional callback-based approaches to handling asynchronous code:

// Readability: Promises allow for more readable and understandable code by avoiding "callback hell" or nested callback structures that can be difficult to read and maintain.

// Error handling: Promises provide a better way to handle errors than callbacks. Errors can be handled with the catch() method, which makes it easier to reason about and handle errors that may occur during the execution of the asynchronous code.

// Chaining: Promises can be chained together using the then() method, which allows for more concise and expressive code that can be easier to read and understand.

// Synchronization: Promises provide a way to synchronize multiple asynchronous operations. For example, Promise.all() can be used to wait for multiple promises to complete before continuing.

// Unidirectional data flow: Promises enforce a unidirectional data flow, which can help to reduce the complexity of the code and make it easier to reason about.
  

// 18. Create promise chaining
// const cart = ['shoes', 'jeans', 'kurta']

// createOrder(cart)
// .then(
//     (orderId)=>{
//         console.log(orderId)
//         return proceedToPayment(orderId)
//     }
// )
// .then(
//     (payment_info)=>{
//         console.log(payment_info)
//         return showOrderSummary(payment_info)
//     }
// )
// .then(
//     (orderSummary)=>{
//         console.log(orderSummary);
//         return updateWallet(orderSummary)
//     }
// )
// .then(
//     (data)=>{
//         console.log(data);
//     }
// )
// .catch((err)=>console.log(err.message))


// function createOrder(cart){
//     const pr = new Promise((resolve, reject)=>{

//         if(!validateCart(cart)){
//             const err = new Error('Cart is not valid')
//             reject(err)
//         }
//         const orderId = '12345'
//         if(orderId){
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 5000);
//         }

//     })
//     return pr
// }
// function validateCart(cart){
//     return true
// }

// function proceedToPayment(orderId){
//     const pr = new Promise((resolve, reject)=>{
//         resolve('payment info')
//     })
//     return pr
// }

// function showOrderSummary(payment_info){
//     const pr = new Promise((resolve, reject)=>{
//         resolve('order summary')
//     })
//     return pr
// }

// function updateWallet(orderSummary){
//     const pr = new Promise((resolve, reject)=>{
//         resolve('wallet is updated')
//     })
//     return pr
// }