import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegsetrationComponent } from './regsetration/regsetration.component';
import { SearchDelteComponent } from './search-delte/search-delte.component';
import {MyService} from "./MyService";
import { EmptyPageComponent } from './empty-page/empty-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RegsetrationComponent,
    SearchDelteComponent,
    EmptyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
