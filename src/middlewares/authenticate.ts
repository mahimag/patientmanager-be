import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import CustomError from "../misc/CustomError";

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const result = await jwt.verify(
      accessToken as string,
      process.env.JWT_SECRET as string
    );

    console.log(result);

    next();
  } catch (err) {
    next(new CustomError("Invalid access token", 401));
  }
};

export default authenticate;
