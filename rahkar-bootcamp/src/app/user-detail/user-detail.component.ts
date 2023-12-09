import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  constructor(private router:Router,
      private activatedRoute:ActivatedRoute,
      private formBuilder:FormBuilder
    ){
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      console.log( this.id );
    }
  id!:string|null
  users: any[] = [
    {
      id: 1,
      name: "Alireza",
      University: "Zanjan",
      image:"assets/images/1.jpg"
    },
    {
      id: 2,
      name: "Kamal",
      University: "Tehran",
      image:"assets/images/1.jpg"
    },
    {
      id:3,
      name:"bijan",
      University: "Tehran",
      image:"assets/images/1.jpg"
    }
  ];
}