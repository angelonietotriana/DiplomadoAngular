import{ITarea } from './ITarea';
export interface ITarjeta {
  titulo: string;
  color: string;
  completa: boolean;
  asignaciones?: ITarea[];
}
