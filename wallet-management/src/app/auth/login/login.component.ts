import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService : AuthService) {}

  password: string = '';
  mobile: string = '';

  onClick() {
      this.authService.login(this.mobile , this.password )
      .subscribe((response) => {
        console.log('login response' , response);   
      })
  }

}
