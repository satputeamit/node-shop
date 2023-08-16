
import { Request, Response, NextFunction } from "express";
import { addProduct, getProducts } from "../../../core/services/products";

export async function addNewProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> { 
  const data = await addProduct(req.body);
  res.json(data);
}

export async function getAllProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> { 
    const data = await getProducts();
    res.json(data);
  }
