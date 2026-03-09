import { prisma } from "../../infrastructure/database/prisma.client";

export const getAllCar = async () => {
  try {
    const cars = await prisma.coche.findMany();

    if (!cars) {
      throw new Error("No se encontraron coches");
    }

    return cars;
  } catch (error) {
    throw new Error("Error al obtener todos los coches");
  }
};
