import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { BodyComponent } from './components/pageConfigs/body/body.component';
import { HeaderComponent } from './components/pageConfigs/header/header.component';
import { FooterComponent } from './components/pageConfigs/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,

    DefaultComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent,
    LoginComponent,
    RecoverPasswordComponent,
    FontAwesomeModule
  ],
})
export class AppComponent {
  title = 'concasBank';
}
