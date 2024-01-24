import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  constructor(private authService : AuthService ,
              private router : Router) {}
  
  mobile: string = '' ;
  password: string = '' ;

  changePage() {
    this.router.navigateByUrl('login')
  }
  onClick() {
    this.authService.register(this.mobile , this.password)
    .subscribe((response) => {
      console.log('registration response ' , response);
    })
    
  }

}
