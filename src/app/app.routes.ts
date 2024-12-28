import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',
        loadComponent: () => import('./Components/Sesion/login/login.component').then(m=>m.LoginComponent)
    },
    {
        path:'register',
        loadComponent: () => import('./Components/Sesion/register/register.component').then(m=>m.RegisterComponent)
    }
];
