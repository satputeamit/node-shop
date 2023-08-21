import { Router } from "express";
import { verifyUser } from "../../../core/middlewares";
import { addNewOrder, getAllOrders , deleteOrderById, updateOrderRecord} from "../../controller/orders";

const router = Router();

router.post("/addorder",verifyUser, addNewOrder);
router.get("/orders",verifyUser,getAllOrders);
router.delete("/deleteorder/:id",verifyUser, deleteOrderById);
router.patch("/updateorder/:id",verifyUser, updateOrderRecord);

export default router;
