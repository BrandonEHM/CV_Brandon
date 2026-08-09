export interface ExperienciaLaboralInterface {
    periodo: string;
    puesto: string;
    empresa: string;
    ubicacion: string;
    descripcion: string;
    icono?: 'carrito' | 'tienda' | 'caja';
    color?: string; // clase Tailwind del círculo, ej. 'bg-purple-500'
}
