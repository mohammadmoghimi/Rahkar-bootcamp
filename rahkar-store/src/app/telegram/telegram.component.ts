import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss'
})
export class TelegramComponent {

  constructor(private http:HttpClient) {

  }

  chat_id :number[] = [1102185139,6365843658] ;
  ngOnInit(): void {
    this.sendMessage('salam')
    
  }
  sendMessage(text:string){
    this.chat_id.foreach(element =>{

    })
    this.http.get(`http://api.telegram.org/bot6108763197:AAFH33T9Gl4e5ph1BmF-mW9UjSfQutUm6xQ/sendMessage?chat_id=
    ${this.chat_id}&text=${text}`.subscribe(data=>{})
    )
  }
}
