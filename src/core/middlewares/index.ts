import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { sendServiceRequest } from "../utils";

const userServiceUrl = process.env.USER_SERVICE

export function verifyUser(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization
  if (token) {
    const secret = process.env.SECRET ? process.env.SECRET : ""

    jwt.verify(token, secret, async (err, decoded: any) => {
      if (err) {
        res.status(403).send({ success: false, message: "Authentication failed..." })
      } else {
        (<any>req).user_info = decoded
        //check isUserValid       
        const response = await sendServiceRequest(
          `${userServiceUrl}/validate/${decoded.id}`,
          "GET",

        );
        const data = await response.json();
        if(data.status){
          next()
        }
        else{
          res.status(404).send({ success: false, message: "User not found..." })
        }
        
      }
    })
  } else {
    res.status(401).json({
      message: "Authentication failed..."
    })
  }



}