import Success from "../../domain/Success";
import PatientModel from "../../models/PatientModel";
import * as patientService from "../../services/patientService";
import Patient, { PatientToInsert } from "../../domain/Patient";

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
    it("should fetch all patients", async () => {
        const createResp = await PatientModel.createPatient(MockPatientData);
       const getAllResp = patientService.getAllPatients(createResp.id);

       expect(getAllResp).toBeInstanceOf(Promise<Success<Patient[]>>);


    })
  });