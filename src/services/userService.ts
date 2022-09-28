import logger from "../misc/logger";
import Success from "../domain/Success";
// import * as UserModel from '../models-bu/UserModel';
import User, { UserToInsert } from "../domain/User";
import UserModel from "../models/UserAccount";
import Token from "../domain/Token";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/**
 * Service to authenticate a user.
 * @param {string} email
 * @param {string} password
 */
export const signin = async (
  email: string,
  password: string
): Promise<Success<Token>> => {
  logger.info("this is a test!!");
  const user = await UserModel.getUserByEmail(email);
  logger.info("this is after the test!!");
  if (!user) {
    return {
      message: "Invalid email or password",
    };
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return {
      message: "Password does not match",
    };
  }

  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string
  );

  return {
    data: { accessToken, id: user.id },
    message: "User signed in successfully",
  };
};

/**
 * Get all the users.
 * @returns {Promise<Success<User[]>>}
 */
export const getAllUsers = async (): Promise<Success<User[]>> => {
  logger.info("Getting all users");
  const users = await UserModel.getAllUsers();

  return {
    data: users,
    message: "Users fetched successfully",
  };
};

/**
 * Get a single user by id.
 * @param {number} userId
 * @returns {Promise<Success<User>>}
 */
export const getUser = async (userId: number): Promise<Success<User>> => {
  logger.info(`Getting user with id: ${userId}`);
  const user = await UserModel.getUser(userId);

  return {
    data: user,
    message: "User fetched successfully",
  };
};

/**
 * Create a new User.
 * @param {UserToInsert} user
 * @returns {Promise<Success<User>>}
 */
export const createUser = async (
  user: UserToInsert
): Promise<Success<User>> => {
  const insertedUser = await UserModel.createUser(user);
  logger.info("User created successfully");

  return {
    data: insertedUser,
    message: "User created successfully",
  };
};

/**
 * Update an existing user.
 * @param {User} user
 * @returns {Promise<Success<User>>}
 */
export const updateUser = async (user: User): Promise<Success<User>> => {
  const updatedUser = await UserModel.updateUser(user);
  logger.info("User updated successfully");

  return {
    data: updatedUser,
    message: "User updated successfully",
  };
};

/**
 * Delete an existing user.
 * @param {number} userId
 * @returns {Promise<Success<User>>}
 */
export const deleteUser = async (userId: number): Promise<Success<User>> => {
  await UserModel.deleteUser(userId);
  logger.info("User deleted successfully");

  return {
    message: "User deleted successfully",
  };
};
