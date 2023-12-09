import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor( private router:Router){}

  onClick(id:string){
    this.router.navigateByUrl('home/user' + id)
  }
  users:any[] = [
    {
      id:1 ,
      name:"Alireza" ,
      University : "Tehran" ,
      
    } ,
    {
      id:2,
      name:"mamad" ,
      University :"znu"
    },
    {
      id:3 ,
      name:"hasan" ,
      University :"shomal"
    }
  ]
  

}
