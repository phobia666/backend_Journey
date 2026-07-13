import express from "express";
import userData from "./data/data.js";
const app = express()
app.use(express.json()); 
// is a middleware joki data ko parse karne ke liye use hota hai
// when a client sends the POST request in JSON format so it needs to be parsed thru a middleware
//that's what this function does basically 

const PORT = 8080;

//-------------------- 1. GET request (it is used for fetching data from the server)

//get karte time status 200 hota hai    
app.get("/", (req, res)=> {
    res.status(200).send("Hello World!")
})


// /api/v1/users hamara endpoint hai
// and browser by default get request hi hit karta hai

//query params      
//req.query me tum key value pair me data pass karte ho
app.get("/api/v1/users", (req, res) => {
    
    
    //question mark ke baad wali chiz url me 
    // console.log(req.query); 
    const {username} = req.query;

    if(username){
        const user = userData.filter((user) =>{
            return(user.username === username);
        })
        res.status(200).send(user);
    }

    res.status(200).send(userData);
})



//router params
//req.params me tum id ke form me data pass karte ho
app.get("/api/v1/users/:id", (req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const idNum = parseInt(id);
    console.log(idNum);

    const user = userData.find((user) => user.id === idNum)
    res.status(200).send(user);

})








//------------------------- 2. POST request (used to send data to the server)

//post karte time status 201 hota hai
app.post("/api/v1/users", (req, res) => {
    const {name, username} = req.body
    //jo aap bhej rhe ho frontend se whi na destructure karoge backend me 
    console.log(name, username);

    const newUser = {
        id : userData.length + 1,
        name: name,
        username:username
    } 
    userData.push(newUser);


    res.status(201).send({
        message: "user created",
        user: newUser 
    });
})





app.listen(PORT, (req, res) => {
    console.log('server is running at Port', PORT);
})

