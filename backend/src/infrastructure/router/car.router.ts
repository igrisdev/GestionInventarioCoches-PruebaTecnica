import { Router } from "express";

import {
  deleteById,
  getAll,
  getById,
  update,
} from "../controller/car.controller";

export const routerCar = Router();

routerCar.get("/", getAll);
routerCar.get("/:id", getById);
routerCar.put("/:id", update);
routerCar.delete("/:id", deleteById);
