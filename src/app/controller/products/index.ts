
import { Request, Response, NextFunction } from "express";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../../../core/services/products";
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


export async function deleteProductById(
    req: Request|any,
    res: Response,
    next: NextFunction
): Promise<void> {    
    var id = req.params.id
    const data = await deleteProduct(id,req.user_info.id);
    res.json(data);
}

export async function updateProductById(
    req: Request|any,
    res: Response,
    next: NextFunction
): Promise<void> {    
    var id = req.params.id
    var body = req.body    
    body.user_id = req.user_info.id
    const data = await updateProduct(id,body);
    res.json(data);
}