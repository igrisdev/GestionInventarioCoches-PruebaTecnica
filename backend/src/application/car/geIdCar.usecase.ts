import { prisma } from "../../infrastructure/database/prisma.client";

interface IGetIdCar {
  id: number;
}

export const geIdCar = async ({ id }: IGetIdCar) => {
  try {
    const car = await prisma.coche.findUnique({
      where: {
        id: id,
      },
    });

    if (!car) {
      throw new Error("No se encontró el coche con el id: " + id);
    }

    return car;
  } catch (error) {
    throw new Error("Error al obtener el coche con el id");
  }
};
