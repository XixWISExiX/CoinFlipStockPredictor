import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import TestModel from "../models/TestModel";

interface CreateModelBody {
    title?: string,
    text?: string,
}

export const getModels: RequestHandler = async (req, res, next) => {
    try {
        const model = await TestModel.find().exec()
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

        const newModel = await TestModel.findById(modelID).exec()

        if(!newModel) {
            throw createHttpError(404, "model not fkin found")
        }

        res.status(201).json(newModel)
    } catch (error) {
        next(error);
    }
}

export const createModel: RequestHandler<unknown, unknown, CreateModelBody, unknown> = async (req, res, next) => {
    
    const title = req.body.title;
    const text = req.body.text;

    try {

        if (!title) {
            throw createHttpError(400, "Model must have a title")
        }

        const newModel = await TestModel.create({
            title: title,
            text: text,
        })

        res.status(201).json(newModel)
    } catch (error) {
        next(error);
    }
}