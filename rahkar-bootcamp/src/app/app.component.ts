import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule,
   FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, 
    ReactiveFormsModule, NavbarComponent ,RouterModule    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // constructor(
  //     private formBuilder:FormBuilder,
  //    ){
  //   console.log("this is constructor");
  // }
  // form!:FormGroup
  // ngOnInit(): void {
  //   console.log("this is ng on Init");
  //   this.form= this.formBuilder.group({
  //     username: ['alireza'],
  //     password:[''],
  //   });
  // }
  // ngOnChanges(): void {
  //  console.log("this is ng on Change");
  // }
  // ngAfterViewInit(): void {
  //   console.log("this is ngAfterViewInit");
  // }
  // obj = {
  //   name: "Alireza"
  // }
  // password = new FormControl();
  // users!:any[]
  // onClick() {
  //   this.form.value
  //   this.users.push(this.form.value)
  //   console.log(this.form.valid);

  //   console.log(this.form.value);
  // }


  onclick(){

  }

stream = new Observable((subscriber) =>{


}) ;

    constructor() {
this.stream.subscribe((data) =>{
  console.log(data);
  
})
    }
}
  
