import { Routes } from '@angular/router';

import { DISHES } from './ronni-store.data';

export const RONNI_STORE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'רוני סטור',
    loadComponent: () => import('./welcome/ronni-store-welcome'),
  },
  {
    path: '',
    loadComponent: () => import('./ronni-store'),
    children: [
      {
        path: 'pancakes',
        title: 'פנקייקים | רוני סטור',
        data: { categoryId: 'pancakes' },
        loadComponent: () => import('./category/ronni-store-category'),
      },
      {
        path: 'waffles',
        title: 'וופל בלגי | רוני סטור',
        data: { categoryId: 'waffles' },
        loadComponent: () => import('./category/ronni-store-category'),
      },
      {
        path: 'mini',
        title: 'מיני פנקייק | רוני סטור',
        data: { categoryId: 'mini' },
        loadComponent: () => import('./category/ronni-store-category'),
      },
      {
        path: 'toppings',
        title: 'תוספות | רוני סטור',
        loadComponent: () => import('./toppings/ronni-store-toppings'),
      },
      ...DISHES.map((dish) => ({
        path: `dish/${dish.id}`,
        title: `${dish.name} | רוני סטור`,
        data: { dishId: dish.id },
        loadComponent: () => import('./dish/ronni-store-dish'),
      })),
      { path: '**', redirectTo: 'pancakes' },
    ],
  },
];
