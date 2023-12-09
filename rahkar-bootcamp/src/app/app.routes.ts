import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BodyComponent } from "./home/body/body.component";
import { HeaderComponent } from "./home/header/header.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { NotFound } from "./not-found.component";
import { RootComponent } from "./root.component";
import { SubmitFormComponent } from "./submit-form/submit-form.component";
import { FormArrayComponent } from "./form-array/form-array.component";

export const routes: Routes = [
  {
    path: "",
    component: RootComponent
  },
  {
    path:'home' ,
    loadChildren :() => import("./home/home.routes") .then((m)=>m.HomeRoutes)
  } ,
  {
    path: "**",
    component: NotFound,
  }
];