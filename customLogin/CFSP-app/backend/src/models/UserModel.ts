import { InferSchemaType, model, Schema } from "mongoose";

// Creating a new model schema for users that stores a username and
// password

const userSchema = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true },
}, { timestamps: true });

// Same reason given as our TestModel, we check that the model
// matches our schema for type safety

type UserModel = InferSchemaType<typeof userSchema>

export default model<UserModel>("User", userSchema)