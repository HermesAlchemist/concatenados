import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DefaultComponent } from '../../../pages/default/default.component';
import { Transaction } from '../../../Models/Transaction';

@Component({
  selector: 'app-bank-statements-list',
  standalone: true,
  templateUrl: './bank-statements-list.component.html',
  styleUrl: './bank-statements-list.component.scss',
  imports: [
    CommonModule,
    DefaultComponent,
  ],
})
export class BankStatementsListComponent implements OnInit {
  @Input() bankStatementsLimit: number = 0;

  transactions: Transaction[] = [];

  ngOnInit(): void {
    this.getTransactions();
  }
  getTransactions(): void {
    // temp transactions list (while we not have a backend to get the transactions list)
    let tempTransactions = [
      {
        date: '2020-01-01',
        description: 'Teste 1',
        value: 100.00,
        type: 'credit',
      },
      {
        date: '2024-02-22',
        description: 'Teste 2',
        value: 200.00,
        type: 'debit',
      },
      {
        date: '2024-02-23',
        description: 'Teste 3',
        value: 300.00,
        type: 'credit',
      },
    ];

    for (let transaction of tempTransactions){
      const date = new Date();  
      // parse to date and check if is today or yesterday
      if (transaction.date === date.toISOString().split('T')[0]) {
        transaction.date = 'Hoje';
      }else if (transaction.date === new Date(date.setDate(date.getDate() - 1)).toISOString().split('T')[0]) {
        transaction.date = 'Ontem';
      }else {
        // tranform in date month format (example: 01 fev)
        transaction.date = new Date(transaction.date).toLocaleDateString('pt-BR', {day: '2-digit', month: 'short'});
      }
      this.transactions.push(transaction);
    }
  }
}
