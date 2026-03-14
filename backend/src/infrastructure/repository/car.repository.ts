import type { ICarRepository } from "../../core/repository/car.repository.entity";
import { prisma } from "../database/prisma.client";

// implementación de la interfaz ICarRepository para el CRUD de coches
export const CarRepository: ICarRepository = {
  getAll: async function (): Promise<any> {
    const cars = await prisma.coche.findMany();

    if (!cars) {
      const error: any = new Error("No se encontraron coches");
      error.statusCode = 404;
      throw error;
    }

    return cars;
  },
  getById: async function (id: number): Promise<any> {
    const car = await prisma.coche.findUnique({
      where: { id: id },
    });

    if (!car) {
      const error: any = new Error(`No se encontró el coche con el id: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    return car;
  },
  create: function (data: any): Promise<any> {
    throw new Error("Function not implemented.");
  },
  update: function (id: number, data: any): Promise<any> {
    throw new Error("Function not implemented.");
  },
  delete: function (id: number): Promise<any> {
    throw new Error("Function not implemented.");
  },
};
