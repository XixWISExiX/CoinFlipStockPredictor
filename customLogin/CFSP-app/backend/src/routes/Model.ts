import express from "express"
import * as ModelController from "../controllers/Model"

const router = express.Router()

router.get("/", ModelController.getModels)
router.get("/:modelID", ModelController.getModel)
router.post("/", ModelController.createModel)

export default router