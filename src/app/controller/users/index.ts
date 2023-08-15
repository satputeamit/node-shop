
import { Request, Response, NextFunction } from "express";
import { addUser, login } from "../../../core/services/users";

export async function addNewUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> { 
  const data = await addUser(req.body);
  res.json(data);
}

export async function loginUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await login(req.body);
  res.json(data);
}
