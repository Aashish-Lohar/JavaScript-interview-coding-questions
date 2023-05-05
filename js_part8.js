//1. What is callback function in javascript?
// A callback function in JavaScript is a function that is passed as an argument to another function and is intended to be called by that function at a later time or under specific conditions. In other words, the function being passed as an argument is a "callback" to the calling function, which will invoke it when appropriate.

// Callbacks are commonly used in asynchronous programming, where the flow of execution is not linear, and the order in which functions are called cannot be predicted

// 2. Attach eventlistener to button using closure
function attachEventListeners(){
    let count = 0;
    document.getElementById('myBtn').addEventListener('click',()=>{
        console.log('button clicked',++count);
    })
}

attachEventListeners()


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