import { Router } from "express";
import upload from "../config/multer";
import * as patientController from "../controllers/patientController";

const router = Router();

router.post("/", patientController.getAllPatients);
router.get("/:patientId", patientController.getPatient);
router.post("/add", upload.single("photo"), patientController.createPatient);
router.put(
  "/:patientId",
  upload.single("photo"),
  patientController.updatePatient
);
router.delete("/:patientId", patientController.deletePatient);

export default router;
