import "dotenv/config"
import express, { NextFunction, Request, Response } from "express"
import modelRoutes from "./routes/Model"
import morgan from "morgan"
import createHttpError, { isHttpError } from "http-errors"

// TODO: explain this shit
const app = express()

// TODO: explain this shit
app.use(morgan("dev"))
app.use(express.json())
app.use("/api/models", modelRoutes)

// TODO: explain this shit
app.use((req, res, next) => {
    next(createHttpError(404, "page not fuckin found"))
});
    
// error handler in case something fucks up.
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