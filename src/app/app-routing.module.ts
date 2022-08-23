import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegsetrationComponent} from "./regsetration/regsetration.component";
import {DeleteUser} from "./delete/search-delte.component";
import {EmptyPageComponent} from "./empty-page/empty-page.component";
import {ShowAllUsersComponent} from "./show-all-users/show-all-users.component";
// import {ShowAllUsersComponent} from "./show-all-users/show-all-users.component";

const routes: Routes = [
  {path:"",component:EmptyPageComponent},
  // {path:"",redirectTo:"regester",pathMatch:"full"}, // if want to be redirected to Resgestard Automatically
  {path:"regester",component:RegsetrationComponent},
  {path:"delete",component:DeleteUser},
  {path:"allUsers",component:ShowAllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
