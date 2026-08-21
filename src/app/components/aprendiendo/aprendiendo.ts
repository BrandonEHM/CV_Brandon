import { Component } from '@angular/core';
import { AprendiendoInterface } from '../../interfaces/aprendiendo/aprendiendo.interface';
@Component({
  selector: 'app-aprendiendo',
  imports: [],
  templateUrl: './aprendiendo.html',
  styleUrl: './aprendiendo.css',
})
export class Aprendiendo {
  protected readonly aprendiendo: AprendiendoInterface[] = [
    {
      tema: 'Automatización de procesos con n8n.',
    },
    {
    tema: 'Integración de APIs REST. ',
    },
    {
    tema: 'Agentes de IA y flujos de trabajo automatizados. ',
    },
    {
    tema: 'React.',
    },

  ];
}
