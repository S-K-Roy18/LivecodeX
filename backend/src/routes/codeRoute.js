import express from "express";
import { executeCode } from "../controller/codeController.js";

const router = express.Router();

router.post("/execute", executeCode);

export default router;