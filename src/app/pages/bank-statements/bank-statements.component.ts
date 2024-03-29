import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../../components/pageConfigs/body/body.component';
import { HeaderComponent } from '../../components/pageConfigs/header/header.component';

@Component({
  selector: 'app-bank-statements',
  standalone: true,
  templateUrl: './bank-statements.component.html',
  styleUrl: './bank-statements.component.scss',
  imports: [
    CommonModule,

    HeaderComponent,
    BodyComponent,
  ],
})
export class BankStatementsComponent {
  movimentacoes = [
    {data: 'Hoje', descricao: 'Carrefour Rib, shop ', valor: 383.06, tipo: 'Compra no débito'},
    {data: 'Ontem', descricao: 'Bruno Alves Silva', valor: 1809.43, tipo: 'Transferência recebida'},
    {data: '18 Fev', descricao: 'Via Varejo S/A', valor: 184.65, tipo: 'Pagamento efetuado'},
    {data: '17 Fev', descricao: 'Bruno Alvez Silva', valor: 1809.43, tipo: 'Transferência recebida'},
    {data: '17 Fev', descricao: 'Bruno Alvez Silva', valor: 1809.43, tipo: 'Transferência recebida'}
  ]
}
