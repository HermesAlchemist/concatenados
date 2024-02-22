import { AfterViewInit, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class LoginFormComponent implements AfterViewInit {
  constructor(private authService: AuthService) { }

  envelope = faEnvelope;
  lock = faLock;
  eye = faEye;

  // login form
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // focus on the 'email' input field
      document.getElementById('email')!.focus();
    }
  }
  
  redirectRecoverPassword() {
    this.authService.redirectToRecoverPassword();
  }
  
  onSubmit() {
    console.log('Logging in...');
    console.log(this.form.valid);
  }
}
