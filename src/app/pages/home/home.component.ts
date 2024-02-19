import { Component } from '@angular/core';
<<<<<<< HEAD
import { DefaultComponent } from '../default/default.component';
import { NgClass } from '@angular/common';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';

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
=======
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, FooterComponent]
>>>>>>> feature/homepage
})
export class HomeComponent {

}
