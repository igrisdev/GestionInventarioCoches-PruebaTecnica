import type { ICar } from "../../core/entity/car.entity.ts";
import type { ICarRepository } from "../../core/repository/car.repository.entity.ts";

interface ICreateCar {
  data: Omit<ICar, "id">;
}

export const createCar = async (
  repository: ICarRepository,
  data: ICreateCar,
) => {
  const car = await repository.create(data);

  return car;
};
