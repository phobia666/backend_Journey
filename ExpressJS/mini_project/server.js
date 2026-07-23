import express from "express";
import publicRoutes from "./routes/public.routes.js";
import privateRoutes from "./routes/private.routes.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import logMiddleware from "./middleware/log.middleware.js";


const PORT = 8080;
const app = express(); 




//important for server.js filename
//This is used because ES Modules (import)
// do not provide __filename and __dirname automatically,
// unlike CommonJS (require).
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ab ye server.js ke directory ko track karega

if(!fs.existsSync(path.join(__dirname, "logs"))){
    fs.mkdirSync(path.join(__dirname, "logs"));
}




 

// inbuilt middleware
app.use(express.json());



// *Global Custom middleware
app.use(logMiddleware);




//Middleware to router
app.use("/public", publicRoutes);
app.use("/private", privateRoutes);







app.get("/", (req, res)=> {
    res.status(200).send({
        message: "Token generated please save it for future use"
    })
})


app.listen(PORT, ()=>{ 
    console.log(`Server is running on http://localhost/:${PORT}`);
})