import { Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { authGuard } from './services/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';


export const routes: Routes = [
    {path: "", component: HomeComponent,},
    {path: "home", component: DefaultComponent, canActivate: [authGuard],},
    {path: "login", component: LoginComponent},
    {path: "recover-password", component: RecoverPasswordComponent,},
    {path: "register", component: CadastroComponent}
];
