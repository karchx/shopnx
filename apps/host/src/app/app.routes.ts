import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: 'about',
    loadChildren: () => import('about/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('cart/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('shop/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
