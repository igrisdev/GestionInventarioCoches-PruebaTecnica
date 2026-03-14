import type { ICar } from "./car.entity";

export interface IBrand {
  id: number;
  nombre: string;
  coches?: ICar[];
}
