import { CarRepository } from "../../infrastructure/repository/car.repository";

// intermediario entre el repositorio y el dominio para obtener todos los coches
export const getAllCar = async () => {
  const carRepository = CarRepository;
  const cars = await carRepository.getAll();

  return cars;
};
