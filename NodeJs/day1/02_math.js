function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}
    
// module.exports = add
// module.exports = subtract

// module.exports = {
//     add,
//     subtract
// }

module.exports = {
    AddFunc : add,
    SubFunc : subtract
} // ye sari chize global se aati h kya?
// nana ye sab module function wrapper me se aati hai

console.log(Object.getOwnPropertyNames(global))