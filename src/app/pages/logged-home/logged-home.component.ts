import { Component } from '@angular/core';
import { DefaultComponent } from '../default/default.component';
import { BankStatementsListComponent } from '../../components/listComponents/bank-statements-list/bank-statements-list.component';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';
import { BodyComponent } from '../../components/pageConfigs/body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logged-home',
  standalone: true,
  templateUrl: './logged-home.component.html',
  styleUrl: './logged-home.component.scss',
  imports: [
    DefaultComponent,
    BankStatementsListComponent,
    HeaderComponent,
    BodyComponent,
    FontAwesomeModule,
    CommonModule,
    RouterModule
  ],
})
export class LoggedHomeComponent {
  
  saldo: number = 325.82; // OBTER ESSE VALOR DE UMA API

  nome: string = 'Adriana';
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