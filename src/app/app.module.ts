import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RegsetrationComponent } from './regsetration/regsetration.component';
import { SearchDelteComponent } from './search-delte/search-delte.component';
import {MyService} from "./MyService";


@NgModule({
  declarations: [
    AppComponent,
    RegsetrationComponent,
    SearchDelteComponent
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
export class AppModule {
}
