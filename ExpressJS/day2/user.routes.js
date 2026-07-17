import { Router } from "express";

const userRouter = Router();


userRouter.get("/create-user", (req, res) => {
    res.send("users got")
})

userRouter.get("/getAllUser", (req, res) => {
    res.send("get All users")
})

userRouter.get("/getUserId", (req, res) => {
    res.send("get user by ID")
})


export default userRouter;