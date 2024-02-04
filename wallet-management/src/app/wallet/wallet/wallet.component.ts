import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletService } from '../wallet.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule , FormsModule ,ReactiveFormsModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent implements OnInit{
  amount: number = 0

  constructor ( private route :ActivatedRoute , private walletService:WalletService) {}
  userId!:number  ;

     ngOnInit() {
         this.route.paramMap.subscribe((params) => {
          this.userId = Number(params.get('userId')) ;
         }) ;
     }

  onClick() {
    this.walletService.addToWallet(this.userId , this.amount).subscribe({
      next : (response) => {console.log('add to wallet response' ,response);
      } ,
      error : (error) => {
        console.log('add to wallet error' , error);          
      }
    })
  }

}
