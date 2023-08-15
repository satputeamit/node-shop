import { Router } from "express";
import { verifyUser } from "../../../core/middlewares";
import { addNewUser,loginUser } from "../../controller/users";

const router = Router();
router.post("/adduser",verifyUser, addNewUser);
router.post("/login", loginUser);

export default router;
