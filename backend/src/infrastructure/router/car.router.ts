import { Router } from "express";

import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../controller/car.controller";

export const routerCar = Router();

// endpoints para obtener todos los datos de los coches
routerCar.get("/", getAll);
// endpoints para obtener datos de un coche
routerCar.get("/:id", getById);
// endpoints para crear un coche
routerCar.post("/create", create);
// endpoints para actualizar datos de un coche
routerCar.put("/:id", update);
// endpoints para eliminar un coche
routerCar.delete("/:id", deleteById);
