interface Patient {
  id: number;
  firstname: string;
  lastname: string;
  number: string;
  dob: string;
  email: string;
  address: string;
  photo: string;
  user_id: string;
  is_fav: string;
}

export type PatientToInsert = Omit<Patient, "id">;

export default Patient;
