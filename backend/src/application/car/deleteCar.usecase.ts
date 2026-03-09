import { prisma } from "../../infrastructure/database/prisma.client";

interface IDeleteCar {
  id: number;
}

export const deleteCar = async ({ id }: IDeleteCar) => {
  try {
    const car = await prisma.coche.delete({
      where: {
        id: id,
      },
    });

    if (!car) {
      throw new Error("No se encontró el coche con el id: " + id);
    }

    return car;
  } catch (error) {
    throw new Error("Error al eliminar el coche con el id");
  }
};
