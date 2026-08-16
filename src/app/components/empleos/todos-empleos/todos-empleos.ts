import { Component } from '@angular/core';
import { ExpProf } from '../exp-prof/exp-prof';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ExperienciaLaboralInterface } from '../../../interfaces/experiencia-laboral/experiencia-laboral.interface';
@Component({
  selector: 'app-todos-empleos',
  imports: [ExpProf, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './todos-empleos.html',
  styleUrl: './todos-empleos.css',
})
export class TodosEmpleos {
  protected readonly experienciasLaborales: ExperienciaLaboralInterface[] = [
    {
      periodo: '2023 – 2024',
      puesto: 'Vendedor de Muebles',
      empresa: 'Muebles y Hogar',
      ubicacion: 'Estado de México, México',
      descripcion: 'Atención y asesoría a clientes, presentación de productos, cierre de ventas y seguimiento postventa.',
      icono: 'carrito',
      color: 'bg-purple-500',
    },
    {
      periodo: '2022 – 2023',
      puesto: 'Asesor de Ventas',
      empresa: 'Comercializadora del Centro',
      ubicacion: 'Estado de México, México',
      descripcion: 'Venta de productos para el hogar, manejo de inventario y organización de exhibición.',
      icono: 'tienda',
      color: 'bg-blue-500',
    },
    {
      periodo: '2021 – 2022',
      puesto: 'Auxiliar de Almacén',
      empresa: 'Distribuidora 3R',
      ubicacion: 'Estado de México, México',
      descripcion: 'Recepción y acomodo de mercancía, control de inventario y apoyo en logística.',
      icono: 'caja',
      color: 'bg-emerald-500',
    },

    
    // agrega más empleos aquí — el @for los recoge automáticamente
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}