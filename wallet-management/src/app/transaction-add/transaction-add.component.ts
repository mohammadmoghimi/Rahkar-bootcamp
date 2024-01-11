import { Component } from '@angular/core';
import { TransactionsService } from './transaction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-add',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './transaction-add.component.html',
  styleUrl: './transaction-add.component.scss'
})
export class TransactionAddComponent {
  userId = 1;
  transactionTitle!: string;
  transactionAmount!: number;

  constructor(private transactionsService: TransactionsService) {}

  addTransaction() {
    const transactionType = 'debit';

    this.transactionsService.addTransaction(this.userId, this.transactionTitle, this.transactionAmount, transactionType).subscribe(
      () => {
        console.log('Transaction added successfully');
      },
      (error) => {
        console.error('Error adding transaction:', error);
      }
    );
  }

}
