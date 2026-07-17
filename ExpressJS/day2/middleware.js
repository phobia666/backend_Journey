import express from "express";

const PORT = 8080;
const app = express();


// middleware to generally top pe banate hai yaha par


function sayHiMiddleware( req, res, next ){
    console.log("Hi i am middleware👋")
    next()
} 
//global middleware
//need to call the next() method to execute the next function 
    // otherwise it won't proceed to the next function
    // middleware ke andar ki chiz to execute hojayegi par uske baad ke
    // baaki requests functions execute nahi honge



// app.use(sayHiMiddleware)
// used to use the middlware function defined above it


app.get("/", (req, res) => {
    res.status(200).send("Hello world");
})

//ye dono functions execute toh hue par middleware ke thru hoke hue hai

app.get("/users", (req, res) => {
    res.status(200).send("users got")
})


//specific route middleware
//sirf yhi route  middleware ke thru hoke jayega
app.get("/contacts", sayHiMiddleware, (req, res) => {
    res.status(200).send("Hello world");
})

//aap kitne hi middleware laga sakte ho 






app.listen(PORT, ()=> {
    console.log("server connected🐇");
})




// 1. Global middleware✅
// 2. specific route middleware
// 3. inbuilt middleware
