import { Component } from '@angular/core';
import { DefaultComponent } from '../default/default.component';
import { NgClass } from '@angular/common';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    NgClass,

    DefaultComponent,
    HeaderComponent,
  ],
})
export class HomeComponent {
  constructor(private authService: AuthService) {
  }

  redirectToLogin(){
    this.authService.redirectToLogin();
  }

  redirectToRegister(){
    this.authService.redirectToRegister();
  }

}
