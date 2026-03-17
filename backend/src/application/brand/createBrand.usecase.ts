import type { IBrand } from "../../core/entity/brand.entity.ts";
import { BrandRepository } from "../../infrastructure/repository/brand.repository.ts";

interface ICreateBrand {
  data: Omit<IBrand, "id">;
}

// intermediario entre el repositorio y el dominio para obtener todas las marcas
export const createBrand = async (data: ICreateBrand) => {
  const repository = BrandRepository;
  const brand = await repository.create(data);

  return brand;
};
