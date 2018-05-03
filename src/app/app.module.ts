import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Ng2Summernote } from './ng2-summernote';


@NgModule({
  declarations: [
    AppComponent,
    Ng2Summernote
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
