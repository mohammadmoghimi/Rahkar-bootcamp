import { Component } from '@angular/core';
import { Routes } from "@angular/router"
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { DiaryItemComponent } from './diary-item/diary-item.component';

export const DairyRoutes: Routes = [
    {
        path:"" ,
         component:DiaryFormComponent
        // component:DiaryItemComponent
    } ,
    // {
    //     path:"list" ,
    //     component:DiaryFormComponent
    // }
]