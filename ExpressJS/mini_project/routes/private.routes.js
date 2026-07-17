import { Router } from "express";

const router = Router();

//dashboard (accesstoken)

router.get("/dashboard", (req, res) => {
    res.status(200).send({
        message : "Welcome to dashboard"
    })
})


export default router;