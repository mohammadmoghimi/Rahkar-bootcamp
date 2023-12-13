import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product/product-detailes/product-detailes.component';
import { TelegramComponent } from './telegram/telegram.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'products',
        component: ProductComponent,
      },
      {
        path: "telegram",
        component: TelegramComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailsComponent,
      },
      { path: 'profile', component: ProfileComponent },
    ],
    
  },
];