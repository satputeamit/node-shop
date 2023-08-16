import { Router } from "express";
import { addNewUser,loginUser } from "../../controller/users";

const router = Router();
router.post("/adduser", addNewUser);
router.post("/login", loginUser);

export default router;
