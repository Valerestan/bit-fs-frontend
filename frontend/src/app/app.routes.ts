import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { TendeciasComponent } from './components/tendecias/tendecias.component';
import { CollecionesComponent} from './components/colleciones/colleciones.component';
import {SobrenosotrosComponent} from './components/sobrenosotros/sobrenosotros.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: 'inicio', title: 'mäbello ', component: HomeComponent },
  {
    path: 'productos',
    title: 'mäbello | Productos',
    component: ProductsComponent,
  },
  {
    path: 'tendecias',
    title: 'mäbello | Tendecias',
    component: TendeciasComponent,
  },
  {
    path: 'colleciones',
    title: 'mäbello| Colleciones',
    component: CollecionesComponent,
  },
  {
    path: 'sobrenosotros',
    title: 'mäbello | Sobre Nosotros',
    component: SobrenosotrosComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: '**',
    title: 'Página No Encontrada',
    component: PagenotfoundComponent,
  },
];
