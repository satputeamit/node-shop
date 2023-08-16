
import { Request, Response, NextFunction } from "express";
import { addProduct, getProducts } from "../../../core/services/products";
import { decode } from "jsonwebtoken";

export async function addNewProduct(
    req: Request|any,
    res: Response,
    next: NextFunction
): Promise<void> {
    var body = req.body    
    body.user_id = req.user_info.id
    const data = await addProduct(body);
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
