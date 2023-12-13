import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import {TelegramService} from "./telegram-service.service"


@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [CommonModule, HttpClientModule,ReactiveFormsModule],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss'
})
export class TelegramComponent {
  constructor(
    private telegramService: TelegramService,
    private formBuilder: FormBuilder
  ) {}

  caht_id: number[] = [420955418];
  ngOnInit(): void {
    this.addItems()
    // this.removeAt(0)
    console.log(this.items);

    // this.sendMessage("سلام")
  }
  errorMessage:string|null = null;

  form:FormGroup=this.formBuilder.group({
    text:["",Validators.required],
    items:this.formBuilder.array([]) ,
    image: [null],
  })


  get items():FormArray{
    return this.form.get('items') as FormArray;
  }

  addItems(){
    this.items.push(this.formBuilder.group({
      name:[""],
      mobile:['']
    }))
  }

  removeAt(index:number){
    this.items.removeAt(index)
  }

  convertlistToTelegramFormat(list:any[]){
    var arrayOfTelegramFormat:any=[]
    // [
    //   [{text:"",callback_data:""},{text:"",callback_data:""}],
    //   [{text:"",callback_data:""},{text:"",callback_data:""}]
    // ]
    list.forEach((element,i) => {
      arrayOfTelegramFormat.push(
        [
          {text:element.name,callback_data:element.name}
        ]
      )

    });
    return arrayOfTelegramFormat

  }

  submite(){
    this.errorMessage=null
    if (this.form.valid) {
      const image = this.form.get('image')?.value;

        this.telegramService.sendMessage(
          this.caht_id[0],
          this.form.get('text')?.value,
          
          this.convertlistToTelegramFormat(this.items.value) ,
          image
          ).subscribe(data=>{

        })

      }
      else{
       this.errorMessage="text is empty"

      }
  }
}
