import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/coffee-list/coffee-list.component').then(m => m.CoffeeListComponent)
    }
];