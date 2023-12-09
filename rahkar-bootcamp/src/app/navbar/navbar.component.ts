import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  menuItem: any[] = [
    {
      title: 'Home',
      link: 'home',
    },
    {
      title: 'Body',
      link: 'home/body',
    },
    {
      title: 'Header',
      link: 'home/header',
    },
    {
      title: 'submit-form',
      link: 'home/submit'
    } ,
    {
      title:'form-array' ,
      link:'home/form-array'
    }
  ];

  onClick(link: string) {
    this.router.navigateByUrl(link);
  }
}