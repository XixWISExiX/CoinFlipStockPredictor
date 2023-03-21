import { InferSchemaType, model, Schema } from "mongoose";

// creates a new collection we can store in the database.
// for now this is just a fuckin test.

const modelSchema = new Schema({
    title: { type: String, required: true},
    text: { type: String },
}, { timestamps: true });

// since we are using typescript, we have to add another step
// we want to have a type for this specific model.
// so its just for type safety (checking if its a valid type: a modelSchema)

type Model = InferSchemaType<typeof modelSchema>

export default model<Model>("Model", modelSchema)