import { CarouselSlideInterface } from "../CarouselSlide/carousel-slide.interface";

export interface MediaInterface {
    type: 'image' | 'video' | 'pdf' | 'youtube';
    src: string;
    slide?: CarouselSlideInterface;
    alt?: string;
    poster?: string; // miniatura opcional para el video antes de reproducir
}
