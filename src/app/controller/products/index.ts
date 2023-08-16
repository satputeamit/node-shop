
import { Request, Response, NextFunction } from "express";
import { addProduct } from "../../../core/services/products";

export async function addNewProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> { 
  const data = await addProduct(req.body);
  res.json(data);
}
