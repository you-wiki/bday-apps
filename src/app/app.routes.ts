import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'elad-19', loadComponent: () => import('./pages/elad-19/elad-19') },
  { path: 'ronni-store', loadComponent: () => import('./pages/ronni-store/ronni-store') },
];
