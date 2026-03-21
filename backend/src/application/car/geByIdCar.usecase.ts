import type { ICarRepository } from "../../core/repository/car.repository.entity";

interface IGetByIdCar {
  id: number;
}

// intermediario entre el repositorio y el dominio para obtener un coche por su id
export const getByIdCar = async (
  repository: ICarRepository,
  { id }: IGetByIdCar,
) => {
  const car = await repository.getById(id);

  return car;
};
