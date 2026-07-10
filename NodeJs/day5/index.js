// const os = require('os');


// // 1. get OS platform and user info
// console.log("OS Platform: ", os.platform());
// console.log("USER INFO: ", os.userInfo());

// // 2. get the os cpu core info
// console.log(os.cpus().length);
// //and other functions of this os module
// //use gpt and search



//now crypto time

const crypto = require("crypto")
//used for authentication purposes
//passwords and such

// 1. randomBytes

const randomValues = crypto.randomBytes(8)
// console.log(randomValues);
// console.log(randomValues.toString("hex"));


// 2. Hash
//username ko toh plain store krdeta h 
//par password ko hash ke form me karta hai tokens ke form me
//suraj( kafoefbefeffbjej121931472)

const hashvalue = crypto.createHash("sha256").update('acehaze13').digest("hex")
console.log(hashvalue);

const inputValue = 'abhyanshu13'

const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")

if(hashvalue === matchValue){
    console.log("user is logged in");
}
else{
    console.log("something went wrong");
}
//dekha authentication
