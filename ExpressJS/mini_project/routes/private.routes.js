import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
const router = Router();





//dashboard (accesstoken)

//ab hoga authentication whi token ham header ke thru bhejenge
//and this will happen inside authMiddleware

router.get("/dashboard", authMiddleware , (req, res) => {
    res.status(200).send({
        
        message : `Welcome to the dashboard ${req.user.name}`
    })
})


export default router;