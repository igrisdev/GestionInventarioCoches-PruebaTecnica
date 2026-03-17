import type { NextFunction, Request, Response } from "express";
import type { IBrand } from "../../core/entity/brand.entity";

import { getAllBrand } from "../../application/brand/getAllBrand.usecase";
import { getByIdBrand } from "../../application/brand/geByIdBrand.usecase";
import { updateBrand } from "../../application/brand/updateBrand.usecase";
import { deleteBrand } from "../../application/brand/deleteBrand.usecase";
import { createBrand } from "../../application/brand/createBrand.usecase";

// obtener todas las marcas de coches de la base de datos
export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allCars = await getAllBrand();

    res.status(200).json({
      success: true,
      data: allCars,
    });
  } catch (error) {
    next(error);
  }
};

// obtener una marca por su id
export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };

    if (!id) {
      const error: any = new Error("No se especificó el id de la marca");
      error.statusCode = 400;
      throw error;
    }

    const isNumberId = Number.isInteger(Number(id));

    if (!isNumberId) {
      const error: any = new Error("El id de la marca no es un número");
      error.statusCode = 400;
      throw error;
    }

    const car = await getByIdBrand({ id: Number(id) });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// crear una marca
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const car = await createBrand({ data });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// actualizar una marca por su id
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };

    if (!id) {
      const error: any = new Error("No se especificó el id de la marca");
      error.statusCode = 400;
      throw error;
    }

    const isNumberId = Number.isInteger(Number(id));

    if (!isNumberId) {
      const error: any = new Error("El id de la marca no es un número");
      error.statusCode = 400;
      throw error;
    }

    const { data } = req.body as { data: Omit<IBrand, "id"> };

    const car = await updateBrand({ id: Number(id), data });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// eliminar una marca por su id
export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };

    if (!id) {
      const error: any = new Error("No se especificó el id de la marca");
      error.statusCode = 400;
      throw error;
    }

    const isNumberId = Number.isInteger(Number(id));

    if (!isNumberId) {
      const error: any = new Error("El id de la marca no es un número");
      error.statusCode = 400;
      throw error;
    }

    const car = await deleteBrand({ id: Number(id) });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};
