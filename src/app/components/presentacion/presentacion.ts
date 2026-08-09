import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImagePanDirective } from '../../directive/image-pan/image-pan.directive';
import { Tecnologias } from '../tecnologias/tecnologias';
@Component({
  selector: 'app-presentacion',
  imports: [ImagePanDirective, RouterLink, Tecnologias],
  templateUrl: './presentacion.html',
  styleUrl: './presentacion.css',
})
export class Presentacion {}