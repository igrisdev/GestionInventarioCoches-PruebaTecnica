import type { ICar } from "../../core/entity/car.entity.ts";
import { CarRepository } from "../../infrastructure/repository/car.repository";

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

interface ICreateCar {
  data: Omit<ICar, "id">;
}

export const createCar = async (data: ICreateCar) => {
  const repository = CarRepository;
  const car = await repository.create(data);

  return car;
};
