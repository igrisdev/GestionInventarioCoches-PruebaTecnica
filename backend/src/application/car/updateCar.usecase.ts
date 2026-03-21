import type { ICar } from "../../core/entity/car.entity";
import type { ICarRepository } from "../../core/repository/car.repository.entity";

interface IUpdateCar {
  id: number;
  data: Omit<ICar, "id">;
}

export const updateCar = async (
  repository: ICarRepository,
  { id, data }: IUpdateCar,
) => {
  const car = await repository.update(id, data);

  return car;
};
