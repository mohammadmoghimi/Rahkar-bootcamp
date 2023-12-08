import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  private isLogin  = new BehaviorSubject(false)
  isLoginObservable = this.isLogin.asObservable()

  
  users: any[] = [
    {
      name: 'John',
      username: 'JohnS',
      password: '1234',
    },
  ];
  login(username: string, password: string): boolean {
    let user = this.users.filter(
      (user) => user.username === username && user.password === password
      );
      if (user.length > 0) {
      this.isLogin.next(true)
      return true;
    } else {
      return false;
    }

  }
}