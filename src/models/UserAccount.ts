import db from "../db/db";
import User, { UserToInsert } from "../domain/User";
import logger from "../misc/logger";

class UserAccount {
  public static table = "user_account";

  public static async getAllUsers() {
    try {
      const users = await db(UserAccount.table).select();
      return users;
    } catch (error) {
      logger.error(error);
    }
  }

  public static async createUser(user: UserToInsert) {
    const newUser = await db(UserAccount.table)
      .insert(user, ["id", "email", "password"])
      .returning(["id", "email"]);

    return newUser;
  }

  public static async getUser(userId: number): Promise<User> {
    const user = await db(UserAccount.table)
      .where({ id: userId })
      .select()
      .first();

    return user;
  }

  public static async getUserByEmail(email: string): Promise<User> {
    const user = await db(UserAccount.table)
      .where({ email: email })
      .select()
      .first();

    return user;
  }

  public static async updateUser(user: User): Promise<User> {
    const [updatedUser] = await db(UserAccount.table)
      .where({ id: user.id })
      .update(user)
      .returning(["email", "password"]);

    return updatedUser;
  }

  public static async deleteUser(userId: number): Promise<void> {
    await db(UserAccount.table).where({ id: userId }).delete();
  }
}

export default UserAccount;
