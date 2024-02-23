import { Component } from '@angular/core';
import { DefaultComponent } from '../default/default.component';
import { BankStatementsListComponent } from '../../components/listComponents/bank-statements-list/bank-statements-list.component';

@Component({
  selector: 'app-logged-home',
  standalone: true,
  templateUrl: './logged-home.component.html',
  styleUrl: './logged-home.component.scss',
  imports: [
    DefaultComponent,
    BankStatementsListComponent,
  ],
})
export class LoggedHomeComponent {

}
