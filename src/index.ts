import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, Application, NextFunction } from "express";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
