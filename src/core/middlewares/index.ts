import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export function verifyUser(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization
    if (token) {
        const secret = process.env.SECRET ? process.env.SECRET :""
        console.log("secret:",secret)
        console.log(token)
        jwt.verify(token, secret,(err, decoded)=> {
          console.log(err)
            if (err) {
              res.status(403).send({ success: false, message: "Authentication failed..." })
            } else {   
              (<any>req).user_info = decoded       
              next()
            }
          })              
    }else{
        res.status(401).json({
            message: "Authentication failed..."
        })
    }
    


}