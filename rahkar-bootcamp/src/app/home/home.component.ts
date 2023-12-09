import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MathService } from "./math.service";

@Component({
    selector:"app-home",
    templateUrl:"./home.component.html" ,
    styleUrl:"./home.component.css" ,
    standalone:true ,
    imports:[RouterOutlet, RouterModule]
})
export class HomeComponent {
    constructor(private math : MathService) {
        console.log(this.math.sum(2 ,3 ))
    }
    
}