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
const routerl = express.Router()

// self explanatory
routerl.get("/", UserController.getModels)
routerl.get("/:modelID", UserController.getModel)
routerl.post("/", UserController.createModel)
routerl.post("/test", UserController.loginAuth)

export default routerl