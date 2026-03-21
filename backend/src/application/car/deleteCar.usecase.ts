import type { ICarRepository } from "../../core/repository/car.repository.entity";

interface IDeleteCar {
  id: number;
}

export const deleteCar = async (
  repository: ICarRepository,
  { id }: IDeleteCar,
) => {
  const car = await repository.delete(id);

  return car;
};
