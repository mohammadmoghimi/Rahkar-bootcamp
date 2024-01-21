import { Routes } from '@angular/router';
import { DiaryItemComponent } from './diaries/diary-item/diary-item.component';
import { DiaryFormComponent } from './diaries/diary-form/diary-form.component';

export const routes: Routes = [
    {
        path:"" ,
        pathMatch:'full' ,
        redirectTo:"list"
    } ,
    {
        path:"item" ,
        component:DiaryItemComponent
    } ,
    {
        path:"list" ,
        component:DiaryFormComponent
    }  
];
