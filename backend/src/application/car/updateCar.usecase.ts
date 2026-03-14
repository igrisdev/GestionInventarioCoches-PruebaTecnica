import type { ICar } from "../../core/entity/car.entity";
import { CarRepository } from "../../infrastructure/repository/car.repository";

interface IUpdateCar {
  id: number;
  data: Omit<ICar, "id">;
}

export const updateCar = async ({ id, data }: IUpdateCar) => {
  const repository = CarRepository;

  const car = await repository.update(id, data);

  return car;
};
