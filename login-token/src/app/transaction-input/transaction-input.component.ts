import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-input',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule],
  templateUrl: './transaction-input.component.html',
  styleUrl: './transaction-input.component.scss'
})
export class TransactionInputComponent {
  @Output() addTransaction = new EventEmitter<{ title: string; price: number }>();

  title = '';
  price = 0;

  submitTransaction() {
    if (this.title && this.price > 0) {
      this.addTransaction.emit({ title: this.title, price: this.price });
      this.title = '';
      this.price = 0;
    }
  }
}
