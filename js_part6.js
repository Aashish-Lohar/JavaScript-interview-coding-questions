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

console.log(user);

// 2. singleton object and literal or non singleton object
let obj = new Object()//singleton object
let obj2 = {} //non-singleton