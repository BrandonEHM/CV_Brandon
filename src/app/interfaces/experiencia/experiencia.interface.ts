import { CarouselSlideInterface } from '../CarouselSlide/carousel-slide.interface';
import { MediaInterface } from '../media/media.interface';
export interface ExperienciaInterface {
  periodo: string;
  puesto: string;
  empresa?: string;
  descripcion: string[];
  tecnologias?: string[];
  imagenes?: MediaInterface[];  // ruta a la captura/preview del proyecto
  actual?: boolean;  // true = nodo con pulso animado (empleo vigente)
}