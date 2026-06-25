const http = require("http");
const fs = require("fs");

const PORT = 8080

//request jo client server ko deta hai 
//response jo server client ko deta hai
const myServer = http.createServer((request, response) => {

    const log = `\n ${Date.now()}: new request received`;

    fs.appendFile("log.txt", log, (err) => {
        if(err){
            console.log("Error writing to the log file ", err);
            response.statusCode = 500;
            response.end("Internal Server Error")
        }
        response.end("Hello from the server")
    })



})

//ham apne server ko port de rhe hai or wo ek constant hona chiye therefore caps me likha h upar
//or kabi bi apne PORT ko mat dikhana const me save rkhko ans as parameter pass kardo
myServer.listen(PORT, ()  => {
    console.log("Server is connected🏃 at ", PORT);
})