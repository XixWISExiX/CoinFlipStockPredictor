import express from "express"
import * as ModelController from "../controllers/Model"

/*
    what this does is navigate through different groups
    of objects in our database.
*/ 

// created new fuckin router
// kinda iamgine like a mini app
const router = express.Router()

// self explanatory
router.get("/", ModelController.getModels)
router.get("/:modelID", ModelController.getModel)
router.post("/", ModelController.createModel)

export default router