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
        path: 'Proyectos-destacados',
        loadComponent: () => import('./components/proyectos-destacados/proyectos-destacados').then(m => m.ProyectosDestacados),
        title: 'CV Brandon - proyectos destacados',
      },

      {
        path: 'Educación',
        loadComponent: () => import('./components/edu-apr-com-idio/edu-apr-com-idio').then(m => m.EduAprComIdio),
        title: 'CV Brandon - Educación',
      },

      {
        path: 'Edu',
        loadComponent: () => import('./components/educacion/educacion').then(m => m.Educacion),
        title: 'CV Brandon - Educación',
      },

      {
        path: 'Aprendiendo',
        loadComponent: () => import('./components/aprendiendo/aprendiendo').then(m => m.Aprendiendo),
        title: 'CV Brandon - Aprendiendo',
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