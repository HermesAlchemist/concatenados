import { AfterViewInit, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  imports: [
    FontAwesomeModule,
  ],
})
export class LoginFormComponent implements AfterViewInit {
  envelope = faEnvelope;
  lock = faLock;
  eye = faEye;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // focus on the 'email' input field
      document.getElementById('email')!.focus();
    }
  }

  
}
