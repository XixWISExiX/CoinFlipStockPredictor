import { InferSchemaType, model, Schema } from "mongoose";

const modelSchema = new Schema({
    title: { type: String, required: true},
    text: { type: String },
}, { timestamps: true });

// since we are using typescript, we have to add another step
// we want to have a type for this specific model.
// so its just for type safety

type Model = InferSchemaType<typeof modelSchema>

export default model<Model>("Model", modelSchema)