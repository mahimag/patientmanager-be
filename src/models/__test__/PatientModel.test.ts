import { PatientToInsert } from "../../domain/Patient"
import PatientModel from "../PatientModel"

const MockPatientData: PatientToInsert = {
  "firstname": "john",
  "lastname": "doe",
  "number": "9238182382",
  "dob": "2022-01-01",
  "email": "john@gmail.com",
  "address": "Nepal",
  "photo": "http://res.cloudinary.com/mymag/image/upload/v1671345846/1671345854035_avatar_d2lcnh.png",
  "user_id": "1",
  "is_fav": "true"
}

describe("CRUD operation on patient data", () => {
  it("should create a new patient", async () => {
    const resp = await PatientModel.createPatient(MockPatientData);

    expect(resp).not.toBeUndefined();
    expect(resp).toBeInstanceOf(Array);
    expect(resp?.length).toBe(1);
    expect(resp && resp[0]).toHaveProperty("id");

    if(resp?.length) {
      await PatientModel.deletePatient(resp[0].id)
    }
  })

  it ("should delete a created patient", async () => {
    const createResp = await PatientModel.createPatient(MockPatientData);

    if(createResp && createResp.length) {
      const deleteResp =  await PatientModel.deletePatient(createResp[0].id);

      expect(deleteResp).toBe(1);
    }

  })

  it ("should get a patient", async () => {
    const createResp = await PatientModel.createPatient(MockPatientData);

    if(createResp && createResp.length) {
        const getResp =  await PatientModel.getPatient(createResp[0].id);
  
        expect(getResp).toBeInstanceOf(Object);
        expect(getResp.id).toBe(createResp[0].id);

        await PatientModel.deletePatient(createResp[0].id)
      }
  })

  it ("should get a patient by email", async () => {
    const createResp = await PatientModel.createPatient(MockPatientData);

    if(createResp && createResp.length) {
        const getResp =  await PatientModel.getPatientByEmail(createResp[0].email);
  
        expect(getResp).toBeInstanceOf(Object);
        expect(getResp.email).toBe(createResp[0].email); 

        await PatientModel.deletePatient(createResp[0].id)
      }
  })

  it ("should get all patients", async () => {
    const createResp = await PatientModel.createPatient(MockPatientData);

    if(createResp && createResp.length) {
        const getResp =  await PatientModel.getAllPatients(createResp[0].userId);
  
        expect(getResp).toBeInstanceOf(Array);
        for (let patient of getResp) {
          expect(patient.userId).toBe(createResp[0].userId); 
        }

        await PatientModel.deletePatient(createResp[0].id)
      }
  })

  it ("should update patient", async () => {
    const createResp = await PatientModel.createPatient(MockPatientData);

    if(createResp && createResp.length) {
        const updateResp =  await PatientModel.updatePatient({
          ...MockPatientData,
          id: createResp[0].id,
          address: "pokhara"
        });

        expect(updateResp).toBeInstanceOf(Object);
        expect(updateResp.address).toBe("pokhara");

        await PatientModel.deletePatient(createResp[0].id)
      }
  })

})    
