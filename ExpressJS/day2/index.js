import express from "express";
import userRouter from "./user.routes.js";
const PORT = 8080;
const app = express();

app.use(userRouter);

//EXPRESS ROUTES
//application ko maintainable banane ke liye acha banane ke liye
// we group all of the routes of expressJS

app.get("/", (req, res) => {
    res.send("Hello world");
})


app.listen(PORT, ()=> {
    console.log("server connected🐇");
})
