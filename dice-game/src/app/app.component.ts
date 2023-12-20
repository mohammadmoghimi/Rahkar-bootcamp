import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { WrapperComponent } from './wrapper/wrapper.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,
     SubmitFormComponent , GameComponent ,  WrapperComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dice-game';
}
