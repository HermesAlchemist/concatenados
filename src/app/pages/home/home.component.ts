import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons';
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

    FontAwesomeModule,
    DefaultComponent,
    HeaderComponent,
  ],
})
export class HomeComponent {
  constructor(private authService: AuthService) {
  }

  rightToBracket = faRightToBracket;

  redirectToLogin(){
    this.authService.redirectToLogin();
  }

  redirectToRegister(){
    this.authService.redirectToRegister();
  }

}
