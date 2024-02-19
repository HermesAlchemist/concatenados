import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { BodyComponent } from './components/pageConfigs/body/body.component';
import { HeaderComponent } from './components/pageConfigs/header/header.component';
import { FooterComponent } from './components/pageConfigs/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,

    DefaultComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,

  ],
})
export class AppComponent {
  title = 'concasBank';
=======
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent]
})
export class AppComponent {
  title = 'ConcasPay';
>>>>>>> feature/homepage
}
