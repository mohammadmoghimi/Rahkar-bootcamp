import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-submit-form',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.scss'
})
export class SubmitFormComponent {
  user = {
    firstName:'' ,
    lastName: '',
    number: '',
    email: ''
  };

  usersData: any[] = [];
  searchQuery: string = '';
  onClickSubmit() {

    this.usersData.push({ ...this.user });

    this.user = {
      firstName: '',
      lastName: '',
      number: '',
      email: ''
    };
  }
  onClickDelete(index: number) {
    this.usersData.splice(index, 1);

  }

  filteredUsersData(): any[] {
    return this.usersData.filter(user => {
      return (
        user.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.number.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }
}
