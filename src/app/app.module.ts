import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule, // Import MatDialogModule
    BrowserAnimationsModule // Import BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
