import type { IBrandRepository } from "../../core/repository/brand.repository.entity";

interface IDeleteBrand {
  id: number;
}

// intermediario entre el repositorio y el dominio para eliminar una marca
export const deleteBrand = async (
  repository: IBrandRepository,
  { id }: IDeleteBrand,
) => {
  const brand = await repository.delete(id);

  return brand;
};
