import { Routes } from '@angular/router';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {
        path:"u" ,
        component:UploadPageComponent
    } ,
    {
        path:"l" ,
        component:ListComponent
    }
];
