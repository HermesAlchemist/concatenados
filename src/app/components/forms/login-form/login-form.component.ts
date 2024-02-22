import { AfterViewInit, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  imports: [
    CommonModule,

    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class LoginFormComponent implements AfterViewInit {
  constructor(private authService: AuthService) { }

  envelope = faEnvelope;
  lock = faLock;
  eye = faEye;

  isFormValid: boolean | null = null;

  // login form
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // focus on the 'email' input field
      document.getElementById('email')!.focus();
    }
  }
  
  onSubmit() {
    this.isValid();
    if (this.isFormValid) {
      // call the login function from the auth service
      let response = this.authService.login(this.form.value);

      if (!response) {
        console.log("nao foi possivel logar");
        return;
      }
      // redirect to home
      this.authService.redirectToHome();
    }
  }

  isValid(): void {
    this.isFormValid = this.form.valid;
  }

  redirectRecoverPassword() {
    this.authService.redirectToRecoverPassword();
  }
}
