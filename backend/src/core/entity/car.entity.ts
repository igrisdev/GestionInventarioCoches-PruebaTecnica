export interface ICar {
  id: number;
  modelo: string;
  año: number;
  precio: number;
  color: string;
  numero_puertas: number;
  tipo_combustible: string;
  imagen?: string;
  marcaId?: number;
}
