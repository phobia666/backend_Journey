import { validateToken } from "../utils/token-utils.js";

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization;
    
    if(token && validateToken(token)){ 
        req.user = {name: "Abhyanshu", id: 1}
        next();
    }
    else{
        res.status(401).end("Unauthorized: invalid or missing token")
    }
    
}

export default authMiddleware;