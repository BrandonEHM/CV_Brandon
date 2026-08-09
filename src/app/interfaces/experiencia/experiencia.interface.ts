export interface ExperienciaInterface {
  periodo: string;
  puesto: string;
  empresa?: string;
  descripcion: string[];
  tecnologias?: string[];
  imagenes?: string[];   // ruta a la captura/preview del proyecto
  actual?: boolean;  // true = nodo con pulso animado (empleo vigente)
}