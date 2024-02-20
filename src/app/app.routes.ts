import { Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { authGuard } from './services/auth/auth.guard';
import { HeaderComponent } from './components/pageConfigs/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    {path: "", component: HomeComponent,},
    {path: "home", component: DefaultComponent, canActivate: [authGuard],},
    {path: "login", component: LoginComponent}
];
