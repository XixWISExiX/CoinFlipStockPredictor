import { cleanEnv } from "envalid"
import { port, str } from "envalid/dist/validators"

// simple makes sure that our environment variables are of correct type
// we used a library to make this easier: envalid
// we just want to make sure shit is right so we dont crash the server.
// or even worse, the server run code, but nothing is showing, vulerabilities happen that way.

export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
});