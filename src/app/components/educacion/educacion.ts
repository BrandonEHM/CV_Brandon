import { Component } from '@angular/core';
import { EducacionInterface } from '../../interfaces/educacion/educacion.interface';
@Component({
  selector: 'app-educacion',
  imports: [],
  templateUrl: './educacion.html',
  styleUrl: './educacion.css',
})

export class Educacion {


  protected readonly escuelas: EducacionInterface[] = [

    {
      titulo: 'Ingeniería en Sistemas Computacionales',
      escuela: 'IPN',
      year: '2021 – 2025',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiqmqylRWhjLaIO31-Xq1d-Ii_rvef-UJIrA7wUE_0g&s=10',
    },
    {
      titulo: 'Técnico en Soporte y Mantenimiento de Equipos de Cómputo',
      escuela: 'CECyTEM',
      year: '2017 – 2020',
      imagen: 'https://images.seeklogo.com/logo-png/20/2/cecytem-logo-png_seeklogo-201352.png',
    },
  ];



}
