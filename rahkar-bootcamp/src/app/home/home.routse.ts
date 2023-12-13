import { Routes } from "@angular/router";
import { RootComponent } from "../root.component";
import { HomeComponent } from "./home.component";
import { FormArrayComponent } from "../form-array/form-array.component";
import { SubmitFormComponent } from "../submit-form/submit-form.component";
import { UsersComponent } from "../users/users.component";
import { HeaderComponent } from "./header/header.component";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { BodyComponent } from "./body/body.component";

export const HomeRoutes : Routes = [
      {
        path: "",
        component: HomeComponent,
        children: [
          {
            path: "body",
            component:BodyComponent
          },
          {
            path: "header",
            component: HeaderComponent,
          },
          {
            path: "users",
            component: UsersComponent,
          },
          {
            path:"submit" ,
            component: SubmitFormComponent ,
          },
          {
            path:"form-array" ,
            component:FormArrayComponent ,
          } ,
          {
            path: "user/:id",
            component: UserDetailComponent,
          },
        ]
      },
]