import app from "./app"
import env from "./util/ValidateEnv"
import mongoose from "mongoose"

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("mongooooooooooooooooooose connected")
        app.listen(port, () => {
            console.log("there was no shit. shit running on port id 5000")
        })
    })
    .catch(console.error);

