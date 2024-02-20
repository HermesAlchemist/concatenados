import { Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { authGuard } from './services/auth/auth.guard';
import { HeaderComponent } from './components/pageConfigs/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';


export const routes: Routes = [
    {path: "", component: HomeComponent, canActivate: [authGuard],},
    {path: "home", component: DefaultComponent, canActivate: [authGuard],},
    {path: "recover-password", component: RecoverPasswordComponent,}
];
