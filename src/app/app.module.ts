import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';


@NgModule({
  imports: [BrowserModule, FormsModule, IonicModule.forRoot({})],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
