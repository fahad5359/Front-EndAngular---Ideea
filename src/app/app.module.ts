import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RegsetrationComponent } from './regsetration/regsetration.component';
import {DeleteUser} from './delete/search-delte.component';
import {MyService} from "./MyService";
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';
import { MakeIdeeaComponent } from './make-ideea/make-ideea.component';


@NgModule({
  declarations: [
    AppComponent,
    RegsetrationComponent,
    DeleteUser,
    EmptyPageComponent,
    ShowAllUsersComponent,
    MakeIdeeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
