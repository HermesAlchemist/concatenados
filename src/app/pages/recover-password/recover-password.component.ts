import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';
import { BodyComponent } from '../../components/pageConfigs/body/body.component';

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
  ],
})
export class RecoverPasswordComponent {
  emailSent = false;
  message = '';
  emailValue: string = '';

  onSubmit() {
    const email = this.emailValue;
    this.sendEmail(email).then(() => {
      this.emailSent = true;
      this.message = 'Email sent successfully, please check your inbox for further instructions.';
    }).catch((error: { message: string; }) => {
      this.message = 'Failed to send email: ' + error.message;
    });
  }

  private sendEmail(email: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email.endsWith('@example.com')) {
        resolve();
        } else {
          reject(new Error('Invalid email address. Please use an email address ending with @example.com'));
        }
      }, 1000);
    })
  }
}
