import type { IBrandRepository } from "../../core/repository/brand.repository.entity";

interface IGetByIdBrand {
  id: number;
}

// intermediario entre el repositorio y el dominio para obtener una marca por su id
export const getByIdBrand = async (
  repository: IBrandRepository,
  { id }: IGetByIdBrand,
) => {
  const brand = await repository.getById(id);

  return brand;
};
