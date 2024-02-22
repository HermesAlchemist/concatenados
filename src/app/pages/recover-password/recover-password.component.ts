import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';
import { BodyComponent } from '../../components/pageConfigs/body/body.component';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {Location} from '@angular/common';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
  imports: [
    FormsModule,
    CommonModule,

    HeaderComponent,
    BodyComponent,

    FontAwesomeModule,
  ],
})
export class RecoverPasswordComponent {
  envelope = faEnvelope;
  emailSent = false;
  message = '';
  emailValue: string = '';

  constructor(private location: Location) { }

  onSubmit() {
    const email = this.emailValue;
    console.log('Sending email to ' + email);
    if (this.isValidEmail(email)) {
      this.emailSent = true;
      this.message = 'Email sent successfully, please check your inbox for further instructions.';
    } else {
      this.message = 'Invalid email address. Please enter a valid email address.';
    }
  }
  
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  backBtn() {
    // return to the last page
    this.location.back();
  }
}
