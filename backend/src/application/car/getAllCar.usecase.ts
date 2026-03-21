import type { ICarRepository } from "../../core/repository/car.repository.entity";

// intermediario entre el repositorio y el dominio para obtener todos los coches
export const getAllCar = async (repository: ICarRepository) => {
  const cars = await repository.getAll();

  return cars;
};
