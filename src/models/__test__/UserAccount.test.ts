import { UserToInsert } from "../../domain/User";
import UserAccount from "../UserAccount";

const MockUserData: UserToInsert = {
  email: "john@gmail.com",
  password: "password",
};

describe("CRUD operation on user account", () => {
  it("should create a new user", async () => {
    const resp = await UserAccount.createUser(MockUserData);

    expect(resp).not.toBeUndefined();
    expect(resp).toBeInstanceOf(Array);
    expect(resp?.length).toBe(1);
    expect(resp && resp[0]).toHaveProperty("id");

    if (resp?.length) {
      await UserAccount.deleteUser(resp[0].id);
    }
  });

  it("should delete a created user", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if (createResp && createResp.length) {
      const deleteResp = await UserAccount.deleteUser(createResp[0].id);

      expect(deleteResp).toBe(1);
    }
  });

  it("should get a user", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if (createResp && createResp.length) {
      const getResp = await UserAccount.getUser(createResp[0].id);

      expect(getResp).toBeInstanceOf(Object);
      expect(getResp.id).toBe(createResp[0].id);

      await UserAccount.deleteUser(createResp[0].id);
    }
  });

  it("should get a user by email", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if (createResp && createResp.length) {
      const getResp = await UserAccount.getUserByEmail(createResp[0].email);

      expect(getResp).toBeInstanceOf(Object);
      expect(getResp.email).toBe(createResp[0].email);

      await UserAccount.deleteUser(createResp[0].id);
    }
  });

  it("should get all users", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if (createResp && createResp.length) {
      const getResp = await UserAccount.getAllUsers();

      expect(getResp).toBeInstanceOf(Array);

      if (getResp) {
        for (let user of getResp) {
          expect(user).toHaveProperty("email");
          expect(user).toHaveProperty("password");
        }
      }

      await UserAccount.deleteUser(createResp[0].id);
    }
  });

  it("should update user", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if (createResp && createResp.length) {
      const updateResp = await UserAccount.updateUser({
        ...MockUserData,
        id: createResp[0].id,
        email: "test@mail.com",
      });

      expect(updateResp).toBeInstanceOf(Object);
      expect(updateResp.email).toBe("test@mail.com");

      await UserAccount.deleteUser(createResp[0].id);
    }
  });
});
