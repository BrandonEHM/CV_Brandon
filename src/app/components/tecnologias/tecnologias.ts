import { Component } from '@angular/core';
import { TechCarousel } from '../shared/tech-carousel/tech-carousel';
import { TecnologiasInterface } from '../../interfaces/tecnologias/tecnologias.interface';
import { ExpProf } from '../empleos/exp-prof/exp-prof';
@Component({
  selector: 'app-tecnologias',
  imports: [TechCarousel, ExpProf],
  templateUrl: './tecnologias.html',
  styleUrl: './tecnologias.css',
})
export class Tecnologias {


  protected readonly tecnologias: TecnologiasInterface[] = [
    { nombre: 'Java', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { nombre: 'Kotlin', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { nombre: 'Python', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { nombre: 'C', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { nombre: 'C++', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { nombre: 'C#', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { nombre: 'JavaScript', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { nombre: 'TypeScript', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { nombre: 'PHP', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { nombre: 'HTML', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { nombre: 'SQL', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },

  ];


  protected readonly frameworks: TecnologiasInterface[] = [
    { nombre: 'Angular', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { nombre: 'Flet', icono: 'https://raw.githubusercontent.com/flet-dev/flet/refs/heads/main/media/logo/flet-logo.svg' },
    { nombre: 'Django', icono: 'https://avatars.githubusercontent.com/u/27804?s=60&v=4' },
    { nombre: 'Tailwind CSS', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { nombre: 'Spring Boot', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  ];


  protected readonly herramientas: TecnologiasInterface[] = [
    { nombre: 'GitHub', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { nombre: 'Unity', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
    { nombre: 'Blender', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
    { nombre: 'Android Studio', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    { nombre: 'Firebase', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { nombre: 'Hugging Face', icono: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
    { nombre: 'MongoDB', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { nombre: 'Docker', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { nombre: 'AWS', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { nombre: 'CCSTUDIO', icono: 'https://upload.wikimedia.org/wikipedia/en/f/f7/CCS_icon.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original' },
  ];


protected readonly areas_de_conocimiento: TecnologiasInterface[] = [
  { nombre: 'Desarrollo Web Full Stack' },
  { nombre: 'Desarrollo Móvil' },
  { nombre: 'Visión por Computadora' },
  { nombre: 'Inteligencia Artificial' },
  { nombre: 'Modelado 3D' },
  { nombre: 'NoSQL' },
  { nombre: 'Microcontroladores' },
  { nombre: 'VHDL' },
  { nombre: 'Soporte Técnico' },
  { nombre: 'Infraestructura de Redes' },
];

}