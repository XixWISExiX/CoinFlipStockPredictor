import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import UserModel from "../models/UserModel";

/* 
    the whole point of this file is to exactly its name:
    controlls the model.

    so you can manipulate data, get data, and create data
    in our database.

*/

/*
    this is so we can create our own error handler instead
    of using express.js. this gives us more control over errors
    and can tell us errors that are more specific and helpful.
    
    this is just to narrow down the TYPES of the models we are requesting
*/
//*Adjusted model type searching for username and password fields

interface CreateModelBody {
    username?: string,
    password?: string,
}

/*
    this returns EVERY single model that is in our database
    what the RequestHandler is: its just a function that runs ever time
    recives a request (like getting data, setting data, etc)
    takes in a request, response, and next
    
    request: what we send to server
    response: what the server gives back
    next: executes the next middleware
    
    middleware: simply smaller functions that deal with
    several request to speed up run time and reduce
    complexity.

     

    what about async? its just a promise

*/ 
export const getModels: RequestHandler = async (req, res, next) => {
    try {
        const model = await UserModel.find().exec()
        res.status(201).json(model)
    } catch (error) {
        next(error)
    }
};

export const getModel: RequestHandler = async (req, res, next) => {
    const modelID = req.params.modelID;

    try {
        if(!mongoose.isValidObjectId(modelID)) {
            throw createHttpError(400, "invalid id")
        }

        const newModel = await UserModel.findById(modelID).exec()

        if(!newModel) {
            throw createHttpError(404, "model not fkin found")
        }

        res.status(201).json(newModel)
    } catch (error) {
        next(error);
    }
}

// as we can see here, our interface is being used to detect empty titles. 
// params go to -> params(url) | req.body | res.body | next

//*Recycled previous code by changing "title" requirement to "username" and also
//adding a password requirement
export const createModel: RequestHandler<unknown, unknown, CreateModelBody, unknown> = async (req, res, next) => {
    
    const username = req.body.username;
    const password = req.body.password;

    try {

        if (!username) {
            throw createHttpError(400, "Model must have a username")
        }

        if (!password) {
            throw createHttpError(400, "Model must have a password")
        }

        const newModel = await UserModel.create({
            username: username,
            password: password,
        })

        res.status(201).json(newModel)
    } catch (error) {
        next(error);
    }

}
export const loginAuth: RequestHandler<unknown, unknown, CreateModelBody, unknown> = async (req, res) => {
    const { username, password } = req.body;

  try {
    // Find user by username in the MongoDB database
    const user = await UserModel.findOne({ username });

    // If user not found, return error
    if (!user) {
      return res.status(403).json({ error: 'User not found' });
    }

    // Compare entered password with hashed password in the database
    const passwordMatch = await (password == user.password);

    // If passwords do not match, return error
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // At this point, the login is successful
    // You can generate and send an access token or session cookie to the client
    // and take other appropriate actions, such as logging in the user and returning user data

    // Example response with user data
    return res.status(200).json({ success: 'Logged in successfully', user: user });
  } catch (err) {
    // Handle any other errors
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }

}