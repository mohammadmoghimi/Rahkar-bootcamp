import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  player1Score: number = 0 ;
  player2Score: number = 0 ;

    rollDice() {
      let dice = Math.floor(Math.random() * 6 ) + 1 ;

      let currentPlayer = this.player1Score <= this.player2Score ? 'player1' : 'player2';

      if (currentPlayer === 'player1') {
        this.player1Score += dice;
      } else {
        this.player2Score += dice;
      }
    }

  

}

