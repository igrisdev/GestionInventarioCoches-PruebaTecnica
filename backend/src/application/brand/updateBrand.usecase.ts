import type { IBrand } from "../../core/entity/brand.entity";
import type { IBrandRepository } from "../../core/repository/brand.repository.entity";

interface IUpdateBrand {
  id: number;
  data: Omit<IBrand, "id">;
}

// intermediario entre el repositorio y el dominio para actualizar todas las marcas
export const updateBrand = async (
  repository: IBrandRepository,
  { id, data }: IUpdateBrand,
) => {
  const brand = await repository.update(id, data);

  return brand;
};
