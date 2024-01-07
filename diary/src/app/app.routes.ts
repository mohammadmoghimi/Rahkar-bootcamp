import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"" ,
        loadChildren:() => import("./diaries/diary.routes").then((m) => m.DairyRoutes)
    }   
];
