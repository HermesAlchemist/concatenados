import { Routes } from '@angular/router';
<<<<<<< HEAD
import { DefaultComponent } from './pages/default/default.component';
import { authGuard } from './services/auth/auth.guard';
import { HeaderComponent } from './components/pageConfigs/header/header.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {path: "", component: HomeComponent, canActivate: [authGuard],},
    {path: "home", component: DefaultComponent, canActivate: [authGuard],}
];
=======

export const routes: Routes = [];
>>>>>>> feature/homepage
