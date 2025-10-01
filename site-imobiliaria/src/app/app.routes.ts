import { Routes } from '@angular/router';
import { Catalogo } from './catalogo/catalogo';
import { ImovelDetalhes } from './imovel-detalhes/imovel-detalhes';
import { FaleConosco } from './fale-conosco/fale-conosco';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
  {
    path: 'comprar',
    component: Catalogo,
    data: {
      finalidade: 2,
      titulo: 'Imóveis à Venda'
    }
  },
  {
    path: 'alugar',
    component: Catalogo,
    data: {
      finalidade: 1,
      titulo: 'Imóveis para Alugar'
    }
  },
  {
    path: 'fale-conosco',
    component: FaleConosco,
    data: {
      finalidade: 3,
      titulo: 'Fale Conosco'
    }
  },
  {
    path: 'imovel/:id',
    component: ImovelDetalhes
  },
];
