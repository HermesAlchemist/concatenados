import { Component } from '@angular/core';
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
}
