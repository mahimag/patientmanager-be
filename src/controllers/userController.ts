import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import logger from "../misc/logger";
import CustomError from "../misc/CustomError";
import * as userService from "../services/userService";
import bcrypt from "bcrypt";
/**
 * Get all users.
 * @param {Request} req
 * @param {Response} res
 */
export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  userService
    .getAllUsers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Get a single user by id.
 * @param {Request} req
 * @param {Response} res
 */
export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  userService
    .getUser(+userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Create a new user.
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  bcrypt.hash(password, 14, (err, hash) => {
    userService
      .createUser({ ...req.body, password: hash })
      .then((data) => res.json(data))
      .catch((err) => next(err));
  });
};

/**
 * Update an existing user.
 * @param {Request} req
 * @param {Response} res
 */
export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;
  const { email, password } = req.body;

  if (!userId || !password || !email) {
    logger.error("Missing parameters userId or name or email");
    throw new CustomError(
      "UserId, Name and email are required",
      StatusCodes.BAD_REQUEST
    );
  }

  userService
    .updateUser({ id: +userId, email, password })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Delete an existing user.
 * @param {Request} req
 * @param {Response} res
 */
export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  userService
    .deleteUser(+userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
