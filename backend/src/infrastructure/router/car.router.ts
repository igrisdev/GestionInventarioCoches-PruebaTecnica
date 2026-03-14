import { Router } from "express";

import { getAll, getById } from "../controller/car.controller";

export const routerCar = Router();

routerCar.get("/", getAll);
routerCar.get("/:id", getById);

