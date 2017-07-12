import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemCardListComponent } from './item-card-list/item-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemCardListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
