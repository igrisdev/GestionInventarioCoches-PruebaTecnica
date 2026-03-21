import { Prisma } from "../../../generated/prisma/client";
import type { IBrand } from "../../core/entity/brand.entity";
import type { IBrandRepository } from "../../core/repository/brand.repository.entity";

import { prisma } from "../database/prisma.client";

// implementación de la interfaz IBrandRepository para el CRUD de las marcas
export const BrandRepository: IBrandRepository = {
  getAll: async function (): Promise<any> {
    const brands = await prisma.marca.findMany({
      include: {
        coches: true,
      },
    });

    return brands;
  },
  getById: async function (id: number): Promise<any> {
    const brand = await prisma.marca.findUnique({
      where: { id: id },
      include: {
        coches: true,
      },
    });

    return brand;
  },
  create: async function ({
    data,
  }: {
    data: Omit<IBrand, "id">;
  }): Promise<any> {
    const brand = await prisma.marca.create({
      data: data as any,
      include: {
        coches: true,
      },
    });

    return brand;
  },
  update: async function (id: number, data: Omit<IBrand, "id">): Promise<any> {
    const brand = await prisma.marca.update({
      where: { id: id },
      data: data as any,
      include: {
        coches: true,
      },
    });

    return brand;
  },
  delete: async function (id: number): Promise<any> {
    const brand = await prisma.marca.delete({
      where: { id: id },
    });

    return brand;
  },
};
