import { Router } from "express";

import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../controller/brand.controller";

export const routerBrand = Router();

// endpoints para obtener todos los datos de las marcas
routerBrand.get("/", getAll);
// endpoints para obtener datos de una marca
routerBrand.get("/:id", getById);
// endpoints para crear una marca
routerBrand.post("/create", create);
// endpoints para actualizar los datos de una marca
routerBrand.put("/:id", update);
// endpoints para eliminar una marca
routerBrand.delete("/:id", deleteById);
