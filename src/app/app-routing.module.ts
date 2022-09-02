import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegsetrationComponent} from "./regsetration/regsetration.component";
import {DeleteUser} from "./delete/search-delte.component";
import {EmptyPageComponent} from "./empty-page/empty-page.component";
import {ShowAllUsersComponent} from "./show-all-users/show-all-users.component";
import {MakeIdeeaComponent} from "./make-ideea/make-ideea.component";
// import {ShowAllUsersComponent} from "./show-all-users/show-all-users.component";

const routes: Routes = [
  {path:"",redirectTo:"/register",pathMatch:'full'},
  {path:"register",component:RegsetrationComponent},
  {path:"allUsers",component:ShowAllUsersComponent},
  {path:"delete",component:DeleteUser},
  {path:"makeIdeea",component:MakeIdeeaComponent},
  {path:"**",component:EmptyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
