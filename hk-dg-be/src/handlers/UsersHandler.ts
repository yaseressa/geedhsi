import { Users, User, UserC } from "../models/users-model";
import verifyAuthToken from "./PlantingHandler";
import { Response, Request, Router, Application } from "express";

const newUser: Users = new Users();
const index = async (req: Request, res: Response) => {
  try {
    const planting = await newUser.index();
    // @ts-ignore
    res.json(planting);
  } catch (e) {
    res.status(400).json(e);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const user = await newUser.show(Number(req.params.id));
    console.log(user);
    res.json(user);
  } catch (e) {
    res.status(400).json(e);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const userc: UserC = {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      password: req.body.password,
    };
    const u: User = await newUser.create(userc);
    //@ts-ignore
    console.log(u);
    res.status(201).json(u);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const userc: UserC = {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      password: req.body.password,
    };
    console.log(req.params.id, userc);
    const u: User = await newUser.update(Number(req.params.id), userc);
    //@ts-ignore

    res.status(201).json(u);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export default (app: Application) => {
  app.get("/dash", index);
  app.post("/dash", create);
  app.put("/dash/user/:id", update);
  app.get("/dash/user/:id", show);
};
