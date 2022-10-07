import express, { Response, Request } from "express";
import "express-async-errors";

const app = express();

app.get("/greet", (request: Request, response: Response) => {
    response.json({greet: "Hello from my server!"});
});

export default app;