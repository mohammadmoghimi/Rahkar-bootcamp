import { Injectable } from '@angular/core';

@Injectable ({
    providedIn:"root"
})
export class ArrayWrapper{
    loopandlog(data : any[]) : void{
        data.forEach((item) => {
            console.log(item);
            
        })
    }

    loopandlogindex(data:any[]): void {
        
    }
}