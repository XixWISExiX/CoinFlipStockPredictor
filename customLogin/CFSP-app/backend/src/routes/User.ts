import express from "express"
import * as UserController from "../controllers/User"

//*IMPORTANT*
// Not entirely sure if this route for user is needed, but 
//  i went ahead and added it just in case. Will probably need
// to be reviewed


/*
    what this does is navigate through different groups
    of objects in our database.
*/ 

// created new fuckin router
// kinda iamgine like a mini app
const router = express.Router()

// self explanatory
router.get("/", UserController.getModels)
router.get("/:modelID", UserController.getModel)
router.post("/", UserController.createModel)
router.post("/test", UserController.loginAuth)

export default router