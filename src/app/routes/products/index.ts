import { Router } from "express";
import { verifyUser } from "../../../core/middlewares";
import { addNewProduct } from "../../controller/products";

const router = Router();

router.post("/addproduct",verifyUser, addNewProduct);

export default router;
