import { Routes } from '@angular/router';
import { SidebarInfoBrandon } from './components/sidebar-info-brandon/sidebar-info-brandon';

export const routes: Routes = [
  {
    path: 'CV',
    component: SidebarInfoBrandon,
    title: 'Brandon | CV',
    children: [
      {
        path: 'Perfil',
        loadComponent: () => import('./components/perfil-profesional/perfil-profesional').then(m => m.PerfilProfesional),
        title: 'Brandon | Perfil Profesional',
      },
      {
        path: 'Inicio',
        loadComponent: () => import('./components/presentacion/presentacion').then(m => m.Presentacion),
        title: 'CV Brandon - presentación',
      },
      {
        path: 'Tecnologias',
        loadComponent: () => import('./components/tecnologias/tecnologias').then(m => m.Tecnologias),
        title: 'CV Brandon - tecnologías',
      },
      {
        path: 'Experiencia_Profesional',
        loadComponent: () => import('./components/empleos/exp-prof/exp-prof').then(m => m.ExpProf),
        title: 'CV Brandon - experiencia profesional',
      },

      {
        path: 'Empleos',
        loadComponent: () => import('./components/empleos/todos-empleos/todos-empleos').then(m => m.TodosEmpleos),
        title: 'CV Brandon - experiencia laboral',
      },


      {
        path: '',
        redirectTo: 'Inicio',
        pathMatch: 'full'
      },
    ]

  },

  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'CV/Inicio',
  }
];