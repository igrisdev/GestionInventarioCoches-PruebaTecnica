import type { IBrand } from "../../core/entity/brand.entity.ts";
import type { IBrandRepository } from "../../core/repository/brand.repository.entity.ts";

interface ICreateBrand {
  data: Omit<IBrand, "id">;
}

// intermediario entre el repositorio y el dominio para obtener todas las marcas
export const createBrand = async (
  repository: IBrandRepository,
  data: ICreateBrand,
) => {
  const brand = await repository.create(data);

  return brand;
};
