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
import {AddItemDialogComponent} from './item-card-list/add-item-dialog/add-item-dialog.component';
import {EditItemDialogComponent} from './item-card/edit-item-dialog/edit-item-dialog.component';
import {LocalStorageModule} from 'angular-2-local-storage';
import {DragulaModule} from 'dragula';

@NgModule({
    declarations: [
        AppComponent,
        ItemCardComponent,
        ItemCardListComponent,
        AddItemDialogComponent,
        EditItemDialogComponent
    ],
    entryComponents: [AddItemDialogComponent, EditItemDialogComponent],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        LocalStorageModule.withConfig({
            storageType: 'localStorage'
        }),
        DragulaModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
