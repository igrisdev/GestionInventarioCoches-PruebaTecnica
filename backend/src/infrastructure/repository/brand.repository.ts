import { Prisma } from "../../../generated/prisma/client";
import type { IBrand } from "../../core/entity/brand.entity";
import type { IBrandRepository } from "../../core/repository/brand.repository.entity";

import { prisma } from "../database/prisma.client";

// implementación de la interfaz IBrandRepository para el CRUD de las marcas
export const BrandRepository: IBrandRepository = {
  getAll: async function (): Promise<any> {
    const brands = await prisma.marca.findMany();

    if (!brands) {
      const error: any = new Error("No se encontraron marcas");
      error.statusCode = 404;
      throw error;
    }

    return brands;
  },
  getById: async function (id: number): Promise<any> {
    const brand = await prisma.marca.findUnique({
      where: { id: id },
    });

    if (!brand) {
      const error: any = new Error(`No se encontró la marca con el id: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    return brand;
  },
  create: async function ({
    data,
  }: {
    data: Omit<IBrand, "id">;
  }): Promise<any> {
    try {
      const brand = await prisma.marca.create({
        data: data as any,
        include: {
          coches: true,
        },
      });

      return brand;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log("👉 EL CÓDIGO DE PRISMA ES:", error.code);

        if (error.code === "P2018") {
          const customError: any = new Error(
            "Uno o más coches que intentas conectar no existen en la base de datos.",
          );
          customError.statusCode = 404;
          throw customError;
        }
      }

      throw error;
    }
  },
  update: async function (id: number, data: Omit<IBrand, "id">): Promise<any> {
    const brand = await prisma.marca.update({
      where: { id: id },
      data: data as any,
    });

    if (!brand) {
      const error: any = new Error(`No se actualizo la marca con el id: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    return brand;
  },
  delete: async function (id: number): Promise<any> {
    const brand = await prisma.marca.delete({
      where: { id: id },
    });

    if (!brand) {
      const error: any = new Error(`No se eliminó la marca con el id: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    return brand;
  },
};
