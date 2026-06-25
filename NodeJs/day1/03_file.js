const fs = require("fs")
const { clearScreenDown } = require("readline")

//fs is a whole another module

// two things are there
// sync (Blocking code), async (Non-blocking code)


// *WRITE

// fs.writeFileSync("./text.txt", "YO! what's up folks");
// fs.writeFile("./test.txt", "game sup folks", (err)=>{
//     console.log((err));
// }) // asyncronously changing the value of the a given file





// *READ

// const res = fs.readFileSync('./text.txt', "utf-8")
// console.log(res)

// fs.readFile('./test.txt', "utf-8", (err, response) => {
//     if(err){
//         console.log(err);
//     }
//     else{  z
//         console.log(response);
//     }
// })




// *update / append

// fs.appendFileSync('./test.txt', new Date().toDateString())

fs.appendFile('./log.txt', `Hello guys this is Abhyanshu and logged in at ${new Date().toDateString()} \n`, (err, response) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(response);
    }
    
})


//TODO

//1. cpSync
//2.  unlinkSync
//3.  mkdirSync
//4.  statSync


// *delete