import type { NextFunction, Request, Response } from "express";
import type { ICar } from "../../core/entity/car.entity";

import { getAllCar } from "../../application/car/getAllCar.usecase";
import { getByIdCar } from "../../application/car/geByIdCar.usecase";
import { updateCar } from "../../application/car/updateCar.usecase";
import { deleteCar } from "../../application/car/deleteCar.usecase";
import { createCar } from "../../application/car/createCar.usecase";

// obtener todos los coches de la base de datos
export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allCars = await getAllCar();

    res.status(200).json({
      success: true,
      data: allCars,
    });
  } catch (error) {
    next(error);
  }
};

// obtener un coche por su id
export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };

    if (!id) {
      const error: any = new Error("No se especificó el id del coche");
      error.statusCode = 400;
      throw error;
    }

    const isNumberId = Number.isInteger(Number(id));

    if (!isNumberId) {
      const error: any = new Error("El id del coche no es un número");
      error.statusCode = 400;
      throw error;
    }

    const car = await getByIdCar({ id: Number(id) });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// crear un coche
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    const car = await createCar({ data });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// actualizar un coche por su id
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };

    if (!id) {
      const error: any = new Error("No se especificó el id del coche");
      error.statusCode = 400;
      throw error;
    }

    const isNumberId = Number.isInteger(Number(id));

    if (!isNumberId) {
      const error: any = new Error("El id del coche no es un número");
      error.statusCode = 400;
      throw error;
    }

    const { data } = req.body as { data: Omit<ICar, "id"> };

    const car = await updateCar({ id: Number(id), data });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// eliminar un coche por su id
export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params as { id: string };

    if (!id) {
      const error: any = new Error("No se especificó el id del coche");
      error.statusCode = 400;
      throw error;
    }

    const isNumberId = Number.isInteger(Number(id));

    if (!isNumberId) {
      const error: any = new Error("El id del coche no es un número");
      error.statusCode = 400;
      throw error;
    }

    const car = await deleteCar({ id: Number(id) });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};
