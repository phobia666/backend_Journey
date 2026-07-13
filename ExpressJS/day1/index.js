import express from "express";
import userData from "./data/data.js";
const app = express()

const PORT = 8080;


// 1. GET request (it is used for fetching data from the server)

// app.get("/", (req, res)=> {
//     res.status(200).send("Hello World!")
// })


// /api/v1/users hamara endpoint hai
// and browser by default get request hi hit karta hai
app.get("/api/v1/users", (req, res) => {
    
    //query params          
    console.log(req.query());

    res.status(200).send(userData);
})
















app.listen(PORT, (req, res) => {
    console.log('server is running at Port', PORT);
})

