import express from "express";
import cors from "cors";

// ROUTES
import albums from "./routes/albums.js"

// CONST
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// PATH URL
app.use("/Albums",albums)

export default app;
