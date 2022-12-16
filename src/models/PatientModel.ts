import db from "../db/db";
import Patient, { PatientToInsert } from "../domain/Patient";

class PatientModel {
  public static table = "patient_table";

  public static async getAllPatients(id: number) {
    const patients = await db(PatientModel.table)
      .select()
      .where({ user_id: id });

    return patients;
  }

  public static async createPatient(patient: PatientToInsert) {
    try {
      const newPatient = await db(PatientModel.table).insert(patient, [
        "id",
        "firstname",
        "lastname",
        "number",
        "dob",
        "email",
        "address",
        "photo",
        "user_id",
        "is_fav",
      ]);
      return newPatient;
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  public static async getPatient(patientId: number): Promise<Patient> {
    const patient = await db(PatientModel.table)
      .where({ id: patientId })
      .select()
      .first();

    return patient;
  }

  public static async getPatientByEmail(email: string): Promise<Patient> {
    const patient = await db(PatientModel.table)
      .where({ email: email })
      .select()
      .first();

    return patient;
  }

  public static async updatePatient(patient: Patient): Promise<Patient> {
    console.log(patient);
    const [updatedPatient] = await db(PatientModel.table)
      .where({ id: patient.id })
      .update(patient)
      .returning([
        "firstname",
        "lastname",
        "number",
        "dob",
        "email",
        "address",
        "photo",
        "user_id",
        "is_fav",
      ]);

    return updatedPatient;
  }

  public static async deletePatient(patientId: number): Promise<void> {
    await db(PatientModel.table).where({ id: patientId }).delete();
  }
}

export default PatientModel;
