import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { WalletComponent } from './wallet/wallet/wallet.component';

export const routes: Routes = [
    {
        path:'' ,
        pathMatch:'full' , 
        redirectTo:'register'
    } ,
    {
        path:'register' ,
        component:RegisterComponent
    } ,
    {
        path:'login' ,
        component:LoginComponent
    } ,
    {
        path:'wallet/:userId' ,
        component:WalletComponent
    }

];
