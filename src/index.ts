import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, Application, NextFunction } from "express";
import appRouter from "./routes";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import { v2 as cloudinary } from "cloudinary";
import logger from "./misc/logger";

dotenv.config();

cloudinary.config();

const app: Application = express();

app.use(express.json());

app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("API is running....");
});

app.use(appRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.clear();
  logger.info(`Server is running on port ${PORT}`);
});
