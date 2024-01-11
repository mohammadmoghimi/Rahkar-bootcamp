import { Component, OnInit } from '@angular/core';
import { WalletService } from './wallet.service';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent implements OnInit{
  userId = 1; 
  walletAmount!:number;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    this.getWalletAmount();
  }
  getWalletAmount() {
    this.walletService.getWalletAmount(this.userId).subscribe(
      (amount)=>{
        this.walletAmount = amount;},
    );
  }

}
