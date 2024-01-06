import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransactionInputComponent } from '../transaction-input/transaction-input.component';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule , TransactionInputComponent],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {
  transactions: { title: string; price: number }[] = [];

  addTransaction(transaction: { title: string; price: number }) {
    this.transactions.push(transaction);
  }

}
