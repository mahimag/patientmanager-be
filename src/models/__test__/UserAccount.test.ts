import User, { UserToInsert } from "../../domain/User"
import UserAccount from "../UserAccount"

const MockUserData: UserToInsert = {
  "email": "john@gmail.com",
  "password": "password",
}

describe("CRUD operation on user account", () => {
  it("should create a new user", async () => {
    const resp = await UserAccount.createUser(MockUserData);

    expect(resp).not.toBeUndefined();
    expect(resp).toBeInstanceOf(Array);
    expect(resp?.length).toBe(1);
    expect(resp && resp[0]).toHaveProperty("id");

    if(resp?.length) {
      await UserAccount.deleteUser(resp[0].id)
    }
  })

  it ("should delete a created user", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if(createResp && createResp.length) {
      const deleteResp =  await UserAccount.deleteUser(createResp[0].id);

      expect(deleteResp).toBe(1);
    }

  })

  it ("should get a user", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if(createResp && createResp.length) {
        const getResp =  await UserAccount.getUser(createResp[0].id);
  
        expect(getResp).toBeInstanceOf(Promise<User>);
        expect(getResp.id).toBe(1);
      }
    if(createResp?.length) {
        await UserAccount.deleteUser(createResp[0].id)
    }
  })

  it ("should get a user by email", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if(createResp && createResp.length) {
        const getResp =  await UserAccount.getUserByEmail(createResp[0].email);
  
        expect(getResp).toBeInstanceOf(Promise<User>);
        expect(getResp.email).toBe(createResp[0].email); 
      }
      if(createResp?.length) {
        await UserAccount.deleteUser(createResp[0].id)
      }
  })

  it ("should get all users", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if(createResp && createResp.length) {
        const getResp =  await UserAccount.getAllUsers();
  
        expect(getResp).toBeInstanceOf(Array);
        expect(getResp).toBe(createResp[0].id); 
      }
      if(createResp?.length) {
        await UserAccount.deleteUser(createResp[0].id)
      }
  })

  it ("should update user", async () => {
    const createResp = await UserAccount.createUser(MockUserData);

    if(createResp && createResp.length) {
        const updateResp =  await UserAccount.updateUser(createResp[0]);
  
        expect(updateResp).toBeInstanceOf(Promise<User>);
        expect(updateResp.id).toBe(createResp[0].id);
        //...
      }
      if(createResp?.length) {
        await UserAccount.deleteUser(createResp[0].id)
      }
  })

  

})    


