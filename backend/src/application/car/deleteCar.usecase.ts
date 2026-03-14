import { CarRepository } from "../../infrastructure/repository/car.repository";

interface IDeleteCar {
  id: number;
}

export const deleteCar = async ({ id }: IDeleteCar) => {
  const repository = CarRepository;
  const car = await repository.delete(id);

  return car;
};
