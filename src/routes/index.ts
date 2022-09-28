import { Router } from "express";
import * as userController from "../controllers/userController";
import * as loginController from "../controllers/loginController";
import authenticate from "../middlewares/authenticate";
import userRoutes from "./userRoutes";

const router = Router();

router.post("/signup", userController.createUser);
router.post("/signin", loginController.signin);

router.use(authenticate);

router.use("/users", userRoutes);

export default router;
