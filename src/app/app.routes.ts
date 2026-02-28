import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { OrderFormComponent } from './components/order-form/order-form'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuListComponent },
  { path: 'checkout', component: OrderFormComponent }
];