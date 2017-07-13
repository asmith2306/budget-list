import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';
import {AppComponent} from './app.component';
import {ItemCardComponent} from './item-card/item-card.component';
import {ItemCardListComponent} from './item-card-list/item-card-list.component';
import {AddItemDialogComponent} from './add-item-dialog/add-item-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        ItemCardComponent,
        ItemCardListComponent,
        AddItemDialogComponent
    ],
    entryComponents: [AddItemDialogComponent],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
