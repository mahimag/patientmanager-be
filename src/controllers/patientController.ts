import { NextFunction, Request, Response } from "express";
import * as patientService from "../services/patientService";

export const getAllPatients = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  patientService
    .getAllPatients(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const getPatient = (req: Request, res: Response, next: NextFunction) => {
  const { patientId } = req.params;

  patientService
    .getPatient(+patientId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const createPatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstname, lastname, number, dob, email, address, user_id, is_fav } =
    req.body;

  const path = req.file?.path as string;

  patientService
    .createPatient({
      firstname,
      lastname,
      number,
      dob,
      email,
      address,
      user_id: JSON.parse(user_id),
      is_fav: JSON.parse(is_fav),
      photo: path,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const updatePatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { patientId } = req.params;
  const { firstname, lastname, number, dob, email, address, user_id, is_fav } =
    req.body;

  const path = req.file?.path as string;

  patientService
    .updatePatient({
      id: +patientId,
      firstname,
      lastname,
      number,
      dob,
      email,
      address,
      user_id: JSON.parse(user_id),
      is_fav: JSON.parse(is_fav),
      photo: path,
    })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

export const deletePatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { patientId } = req.params;

  patientService
    .deletePatient(+patientId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
