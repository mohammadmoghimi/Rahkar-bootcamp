import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService : AuthService ,
     private route : ActivatedRoute , private fb:FormBuilder) {}

  loginForm:FormGroup = this.fb.group({
    mobile : [''] ,
    password : ['']
  })  
  userId!:number  ;

  onClick() {
    const { mobile , password } = this.loginForm.value ;

    if(mobile && password ) {
        this.authService.login( mobile , password).subscribe({
        next:(response : any) => {
        console.log('login response' , response);
        if(response && response.token) {
        this.authService.storeToken(response.token) ;
        }
        } ,
          error : (error) => {
            console.log('login error ' , error);
          }
            }
    )  
  }
    else {
      console.log('mobile and password required'); 
    }
  }

}
