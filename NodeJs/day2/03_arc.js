process.env.UV_THREADPOOL_SIZE = 5;

// const js = require('fs');




// setImmediate(() => {
//     // console.log("hello from immediate");
// }, 0)   

// setTimeout(() => {
//     // console.log("hello from timeOut");
// }, 0)


// console.log('hello world -1');


//acc to the nodeJS process chart theses tasks will be executed in the given ordere

//console.log()
//setTimeOut
//setImmediate 

    // must be at the very top, before any requires

let start = Date.now();

const crypto = require("crypto");

crypto.pbkdf2("password-1", "salt-1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms, done`);
})

crypto.pbkdf2("password-1", "salt-1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms, done`);
})
crypto.pbkdf2("password-1", "salt-1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms, done`);
})
crypto.pbkdf2("password-1", "salt-1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms, done`);
})
crypto.pbkdf2("password-1", "salt-1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms, done`);
})
crypto.pbkdf2("password-1", "salt-1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms, done`);
})



