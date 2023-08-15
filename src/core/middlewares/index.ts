import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export function verifyUser(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization
    if (token) {
        const secret = process.env.SECRET ? process.env.SECRET :""
        const isValid = jwt.verify(token, secret,(err, decoded)=> {
            if (err) {
              res.status(403).send({ success: false, message: "Authentication failed..." })
            } else {   
              (<any>req).decoded = decoded       
              next()
            }
          })              
    }else{
        res.status(401).json({
            message: "Authentication failed..."
        })
    }
    


}