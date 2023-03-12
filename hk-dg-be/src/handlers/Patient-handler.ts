import { Patient, Patients } from "../models/patient-model";
import { Response, Request, Application } from "express";
const patient: Patients = new Patients();

const index = async (req: Request, res: Response) => {
  try {
    const p: Patient[] = await patient.index();
    //@ts-ignore
    return res.json(p);
  } catch (e) {
    res.status(400).json(e);
  }
};
const getByName = async (req: Request, res: Response) => {
  try {
    const product = await patient.show(req.params.name);
    res.json(product);
  } catch (e) {
    res.status(400).json(e);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const pt: Patient = {
      name: req.body.name,
      gender: req.body.gender,
    };

    const p = await patient.create(pt);
    res.json(p);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export default (app: Application) => {
  app.get("/patients", index);
  app.get("/patients", getByName);
  app.get("/patients", create);
};
