import { Component } from '@angular/core';
import { Educacion } from '../educacion/educacion';
import { Aprendiendo } from '../aprendiendo/aprendiendo';

@Component({
  selector: 'app-edu-apr-com-idio',
  imports: [Educacion, Aprendiendo],
  templateUrl: './edu-apr-com-idio.html',
  styleUrl: './edu-apr-com-idio.css',
})
export class EduAprComIdio {}
