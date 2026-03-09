import type { ICar } from "../../core/car.entity";
import { prisma } from "../../infrastructure/database/prisma.client";

export const updateCar = async ({
  id,
  año,
  color,
  modelo,
  numero_puertas,
  precio,
  tipo_combustible,
  imagen,
  marcaId,
}: ICar) => {
  try {
    const car = await prisma.coche.update({
      where: {
        id: id,
      },
      data: {
        año: año,
        color: color,
        modelo: modelo,
        numero_puertas: numero_puertas,
        precio: precio,
        tipo_combustible: tipo_combustible,
        imagen: imagen,
        marcaId: marcaId,
      },
    });

    if (!car) {
      throw new Error("No se actualizo el coche con el id: " + id);
    }

    return car;
  } catch (error) {
    throw new Error("Error al actualizar el coche con el id");
  }
};
