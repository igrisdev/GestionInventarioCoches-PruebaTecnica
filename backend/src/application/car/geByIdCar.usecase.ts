import { CarRepository } from "../../infrastructure/repository/car.repository";

interface IGetByIdCar {
  id: number;
}

// intermediario entre el repositorio y el dominio para obtener un coche por su id
export const getByIdCar = async ({ id }: IGetByIdCar) => {
  const carRepository = CarRepository;
  const car = await carRepository.getById(id);

  return car;
};
