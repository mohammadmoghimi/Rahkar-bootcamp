import { Component } from '@angular/core';
import { SubmitFormComponent } from '../submit-form/submit-form.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [SubmitFormComponent],
  template: `
  <app-submit-form (clickEvent)="onSubmitUser1($event)"></app-submit-form>
  <app-submit-form (clickEvent)="onSubmitUser2($event)"></app-submit-form>
  `,
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
  user1: string = '';
  user2: string = '';
  isValidated: boolean = false;
  canStartGame : boolean = false ;

  constructor(private http: HttpClient) {}

  onSubmitUser1(username: string) {
    this.user1 = username;
    this.senddatatobackend() ;
  }
  onSubmitUser2(username: string) {
    this.user2 = username;
    this.senddatatobackend() ;
   }
    senddatatobackend() {
          if (this.user1 && this.user2) {
      this.http.post('/api/users', { user1: this.user1, user2: this.user2 })
        .subscribe(
          (response: any) => {
            if (response.success) {
              this.isValidated = response.isValidated; 
              this.canStartGame = true ;
            }
          },
        );
    } 
    }
}
