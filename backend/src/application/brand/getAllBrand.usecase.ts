import { BrandRepository } from "../../infrastructure/repository/brand.repository";

// intermediario entre el repositorio y el dominio para obtener todas las marcas
export const getAllBrand = async () => {
  const repository = BrandRepository;
  const brands = await repository.getAll();

  return brands;
};
