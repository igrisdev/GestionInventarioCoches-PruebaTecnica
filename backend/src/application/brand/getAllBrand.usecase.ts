import type { IBrandRepository } from "../../core/repository/brand.repository.entity";

// intermediario entre el repositorio y el dominio para obtener todas las marcas
export const getAllBrand = async (repository: IBrandRepository) => {
  const brands = await repository.getAll();

  return brands;
};
