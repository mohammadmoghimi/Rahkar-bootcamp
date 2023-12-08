import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsernameService } from '../username.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isLogin: boolean = false;
  constructor(
    private UsernameService: UsernameService,
    private routerModules: RouterModule
  ) {
    this.checkIsLogin()
  }
 

  login() {
    this.isLogin = this.UsernameService.login('ali', 'password');
  }

  checkIsLogin(){
    this.UsernameService.isLoginObservable.subscribe({
      next:(value)=>{
        this.isLogin = value
      }
    })
  }
}