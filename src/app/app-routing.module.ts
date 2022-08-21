import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegsetrationComponent} from "./regsetration/regsetration.component";
import {SearchDelteComponent} from "./search-delte/search-delte.component";
import {EmptyPageComponent} from "./empty-page/empty-page.component";

const routes: Routes = [
  {path:"",component:EmptyPageComponent},
  // {path:"",redirectTo:"regester",pathMatch:"full"}, // if want to be redirected to Resgestard Automatically
  {path:"regester",component:RegsetrationComponent},
  {path:"search",component:SearchDelteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
