import { Router } from "express";
import * as userController from "../controllers/userController";
import * as loginController from "../controllers/loginController";
import authenticate from "../middlewares/authenticate";
import userRoutes from "./userRoutes";
import patientRoutes from "./patientRoutes";

const router = Router();

router.post("/signup", userController.createUser);
router.post("/signin", loginController.signin);

router.use(authenticate);

router.use("/users", userRoutes);
router.use("/patients", patientRoutes);

export default router;
