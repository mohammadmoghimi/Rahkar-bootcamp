import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  menuListItems: any[] = [
    {
      title: "Github",
      link: "https://github.com"
    },
    {
      title: "Google",
      link: "https://google.com"
    }
  ];

  isUserLoggedIn: boolean = false;

  fontSizeDefault: number = 12;

  backgroundColor: string = 'red';

  @Output() lastnameChange = new EventEmitter();

  obj: any = {};

  lastname: string = '';

  ngOnInit(): void {
    this.obj = {
      name: "Alireza",
      age: 23,
      job: "SE",
      university: {
        name: "ZNU",
        address: "Koshkan City",
      },
      courses: [2, 3]
    };
  }

  onChangeFirstname(event: any) {
    console.log(event.target.value);
  }

  onChangeLastName(event: any) {
    this.lastname = event.target.value;
  }

  getBackgroundColor(): string {
    if (this.isUserLoggedIn) return 'yellow';
    else return 'red';
  }

  onHandleClick() {
    this.fontSizeDefault++;
    this.isUserLoggedIn = !this.isUserLoggedIn;
    this.lastnameChange.emit(this.lastname);
    this.menuListItems.push(this.lastname);
  }
}