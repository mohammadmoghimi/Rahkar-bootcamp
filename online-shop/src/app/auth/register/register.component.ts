import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private fb:FormBuilder , private authService:AuthService){}

  registerForm:FormGroup = this.fb.group({
    fullname:['',Validators.required] ,
    username:['',Validators.required] ,
    password:['',Validators.required]
  })


  errorText:string = '' ;
  onSubmitRegister(){
    this.authService.register(this.registerForm.value).subscribe({
      next:(data) => {
        console.log(data);  
      } ,

      error:(error) => {
        console.log("my error" , error);
        this.errorText = error ;
        
      }

    })
  }

}
