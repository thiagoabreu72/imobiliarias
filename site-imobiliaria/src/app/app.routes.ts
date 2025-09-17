import { Routes } from '@angular/router';
import { Catalogo } from './catalogo/catalogo';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
  {
    path: 'catalogo',
    component: Catalogo,
  },
];
