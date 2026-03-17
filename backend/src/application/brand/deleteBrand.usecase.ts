import { BrandRepository } from "../../infrastructure/repository/brand.repository";

interface IDeleteBrand {
  id: number;
}

// intermediario entre el repositorio y el dominio para eliminar una marca
export const deleteBrand = async ({ id }: IDeleteBrand) => {
  const repository = BrandRepository;
  const brand = await repository.delete(id);

  return brand;
};
