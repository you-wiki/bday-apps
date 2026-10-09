import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home') },
  { path: 'elad-19', loadComponent: () => import('./pages/elad-19/elad-19') },
  { path: 'ronni-9', loadComponent: () => import('./pages/ronni-9/ronni-9') },
  {
    path: 'ronni-store',
    loadChildren: () =>
      import('./pages/ronni-store/ronni-store.routes').then(
        ({ RONNI_STORE_ROUTES }) => RONNI_STORE_ROUTES,
      ),
  },
];
