import { Router } from "express";
import { verifyUser } from "../../../core/middlewares";
import { addNewProduct, deleteProductById, getAllProducts, updateProductById } from "../../controller/products";

const router = Router();

router.post("/addproduct",verifyUser, addNewProduct);
router.get("/products", getAllProducts);
router.delete("/deleteproduct/:id",verifyUser, deleteProductById);
router.patch("/updateproduct/:id",verifyUser, updateProductById);

export default router;
