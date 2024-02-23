import { Routes } from '@angular/router';
import { authGuard } from './services/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { CartoesComponent } from './pages/cartoes/cartoes.component';
import { LoggedHomeComponent } from './pages/logged-home/logged-home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent,},
    {path: "login", component: LoginComponent},
    {path: "recover-password", component: RecoverPasswordComponent,},
    {path: "register", component: CadastroComponent},
    {path: "cartoes", component: CartoesComponent, canActivate: [authGuard],},
    {path: "home", component: LoggedHomeComponent, canActivate: [authGuard],},
];
