import "dotenv/config"
import express, { NextFunction, Request, Response } from "express"
import modelRoutes from "./routes/Model"
import morgan from "morgan"
import createHttpError, { isHttpError } from "http-errors"
import userRoutes from "./routes/User"
import cors from "cors"

// gives us access to the express functions
// express is just a back-end framework that helps
// the client (website) and the server (databases) 
// communicate. represents the api we are actually gonna make
const app = express()

// morgan is used to help log errors. you dont really need it, but its just nice to have
// express.json() just parses incomming requests with JSON. its a middleware. 
// 
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
//app.use("/api/models", modelRoutes)
app.use("/models", userRoutes)
 
  
// this is just an error handler in case that a page does not exist in the server
app.use((req, res, next) => {
    next(createHttpError(404, "page not fuckin found"))
});
    
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    let errorMessage = "someting happen"
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status
        errorMessage = error.message
    }
    res.status(statusCode).json({ error: errorMessage })
});

export default app