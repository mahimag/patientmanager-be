import logger from "../misc/logger";
import Success from "../domain/Success";
// import * as PatientModel from "../models-bu/PatientModel";
import PatientModel from "../models/PatientModel";
import Patient, { PatientToInsert } from "../domain/Patient";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

export const getAllPatients = async (
  id: number
): Promise<Success<Patient[]>> => {
  const patients = await PatientModel.getAllPatients(id);

  return {
    data: patients,
    message: "Patients fetched successfully",
  };
};

export const getPatient = async (
  patientId: number
): Promise<Success<Patient>> => {
  const patient = await PatientModel.getPatient(patientId);

  return {
    data: patient,
    message: "Patient fetched successfully",
  };
};
export const createPatient = async (
  patient: PatientToInsert
): Promise<Success<Patient>> => {
  try {
    if (!fs.existsSync(patient.photo)) {
      throw new Error("File not found!!");
    }

    const result = await cloudinary.uploader.upload(patient.photo, {
      resource_type: "image",
      use_filename: true,
      width: 500,
      height: 500,
      crop: "limit",
    });

    fs.unlinkSync(patient.photo);

    const insertedPatient = await PatientModel.createPatient({
      ...patient,
      photo: result.url,
    });

    return {
      data: insertedPatient,
      message: "Patient created successfully",
    };
  } catch (error) {
    logger.error(error);
    return {
      message: "Patient could not be created",
    };
  }
};

export const updatePatient = async (
  patient: Patient
): Promise<Success<Patient>> => {
  try {
    if (!fs.existsSync(patient.photo)) {
      throw new Error("File not found!!");
    }

    const result = await cloudinary.uploader.upload(patient.photo, {
      resource_type: "image",
      use_filename: true,
      width: 500,
      height: 500,
      crop: "limit",
    });

    fs.unlinkSync(patient.photo);

    const updatedPatient = await PatientModel.updatePatient({
      ...patient,
      photo: result.url,
    });

    return {
      data: updatedPatient,
      message: "Patient created successfully",
    };
  } catch (error) {
    logger.error(error);
    return {
      message: "Patient could not be updated",
    };
  }
};

export const deletePatient = async (
  PatientId: number
): Promise<Success<Patient>> => {
  await PatientModel.deletePatient(PatientId);

  return {
    message: "Patient deleted successfully",
  };
};
