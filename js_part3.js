// 1. references

// Objects and arrays are assigned by reference, so any operation on refernce data will
//  effect original data, below is example of that
// const basicConfig = { host: "http://google.com" };
// const extendConfig = (config) => {
// config.port = 3000;
// return config
// };
// const extendedConfig = extendConfig(basicConfig);
// console.log(extendedConfig, basicConfig);

// instead of above we can use below solution
// const basicConfig = { host: "http://google.com" };
// const extendConfig = (config) => {
//     // return Object.assign({}, config, {port:3000}) //this also correct
//     return {
//         ...config,
//         port:3000
//     }
// };
// const extendedConfig = extendConfig(basicConfig);
// console.log(extendedConfig, basicConfig);