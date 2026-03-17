import { BrandRepository } from "../../infrastructure/repository/brand.repository";

interface IGetByIdBrand {
  id: number;
}

// intermediario entre el repositorio y el dominio para obtener una marca por su id
export const getByIdBrand = async ({ id }: IGetByIdBrand) => {
  const repository = BrandRepository;
  const brand = await repository.getById(id);

  return brand;
};
