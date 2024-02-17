import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';
import { BodyComponent } from '../../components/pageConfigs/body/body.component';
import { FooterComponent } from '../../components/pageConfigs/footer/footer.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-default',
  standalone: true,
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
  imports: [
    NgClass,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
})
export class DefaultComponent {

}
