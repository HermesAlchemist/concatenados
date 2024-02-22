import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';
import { BodyComponent } from '../../components/pageConfigs/body/body.component';
import { LoginFormComponent } from '../../components/forms/login-form/login-form.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    HeaderComponent,
    BodyComponent,
    LoginFormComponent
  ],
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  redirectToRegister() {
    this.authService.redirectToRegister();
  }


}
