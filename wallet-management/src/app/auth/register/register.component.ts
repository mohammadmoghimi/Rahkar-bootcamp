import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , CommonModule  , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  constructor(private authService : AuthService ,
              private router : Router , private fb : FormBuilder) {}
    
      // registerForm = new FormGroup({
      //   mobile: new FormControl('',[Validators.required]) ,
      //   password: new FormControl('', Validators.required)
      // }) ;

      registerForm: FormGroup = this.fb.group({
        mobile : [''] ,
        password : ['']
      })

  onClick() {
    const mobile = this.registerForm.get('mobile')?.value;
    const password = this.registerForm.get('password')?.value;
    this.authService.register( mobile , password )
    .subscribe((response) => {
      console.log('registration response ' , response);
    })
  }

  changePage() {
    this.router.navigateByUrl('login')
  }
}
