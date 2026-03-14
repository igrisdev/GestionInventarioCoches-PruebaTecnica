import type { ICar } from "../../core/entity/car.entity";
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
  create: async function ({ data }: { data: Omit<ICar, "id"> }): Promise<any> {
    const car = await prisma.coche.create({
      data: data as any,
    });

    if (!car) {
      const error: any = new Error("No se creó el coche");
      error.statusCode = 404;
      throw error;
    }

    return car;
  },
  update: async function (id: number, data: Omit<ICar, "id">): Promise<any> {
    const car = await prisma.coche.update({
      where: { id: id },
      data: data,
    });

    if (!car) {
      const error: any = new Error(`No se actualizo el coche con el id: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    return car;
  },
  delete: async function (id: number): Promise<any> {
    const car = await prisma.coche.delete({
      where: { id: id },
    });

    if (!car) {
      const error: any = new Error(`No se eliminó el coche con el id: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    return car;
  },
};
