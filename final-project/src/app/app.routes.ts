import { Routes } from '@angular/router';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {
        path:'' ,
        pathMatch:'full' ,
        redirectTo:"upload"
    } ,
    {
        path:"upload" ,
        component:UploadPageComponent
    } ,
    {
        path:"list" ,
        component:ListComponent
    }
];
