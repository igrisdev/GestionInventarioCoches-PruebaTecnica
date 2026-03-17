import type { IBrand } from "../../core/entity/brand.entity";
import { BrandRepository } from "../../infrastructure/repository/brand.repository";

interface IUpdateBrand {
  id: number;
  data: Omit<IBrand, "id">;
}

// intermediario entre el repositorio y el dominio para actualizar todas las marcas
export const updateBrand = async ({ id, data }: IUpdateBrand) => {
  const repository = BrandRepository;

  const brand = await repository.update(id, data);

  return brand;
};
