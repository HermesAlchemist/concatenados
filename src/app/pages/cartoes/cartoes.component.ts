import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';
import { BodyComponent } from '../../components/pageConfigs/body/body.component';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, FontAwesomeModule, CommonModule],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.scss'
})
export class CartoesComponent {
  hand = faHand;

  nome: string = 'Adriana';
  limite: string = 'R$ 1.000,00';
  numero: string = '1234 5678 9012 3456';
  nomeCartao: string = 'Adriana da Silva';
  validade: string = '12/25';
  cvc: string = '123';

  saudacao: string = '';

  ngOnInit() {
    const horaAtual = new Date().getHours();
    if (horaAtual >= 0 && horaAtual < 12) {
      this.saudacao = 'Bom dia';
    } else if (horaAtual >= 12 && horaAtual < 18) {
      this.saudacao = 'Boa tarde';
    } else {
      this.saudacao = 'Boa noite';
    }
    this.saudacao += ', ' + this.nome + '!';
  }

  showDropdown = false; // Controla a visibilidade do dropdown
  
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
  
  }
}