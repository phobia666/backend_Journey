import { Router } from "express";
import { generateToken } from "../utils/token-utils.js";




//import { Router } from "express"; ya to ese
//bas destructure hi toh kiya h express ko becuz
//router uske andar ka ek function hi toh hai

const router = Router();

//jese hi koi user is route ko hit karega toh ham ek


//1. Generate-token karke API endpoint ko hit karenge
//hamare liye ek token generate karke dedega
router.get("/generate-token", (req, res)=> {
    const token = generateToken();

    res.status(200).send({
        message: "Token generated please save it for future use",
        token: token
    })
})


router.get("/", (req, res)=>{

    res.status(200).send({
        message: "welcome to the home page🏠",
    })
})


export default router;







// 2. Home Route