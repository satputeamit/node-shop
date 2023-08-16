import { Router } from "express";
import { verifyUser } from "../../../core/middlewares";
import { addNewProduct, getAllProducts } from "../../controller/products";

const router = Router();

router.post("/addproduct",verifyUser, addNewProduct);
router.get("/products", getAllProducts);

export default router;
