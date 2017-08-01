import {Item} from 'app/models/item';
import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {MdDialog, MdSlideToggle} from '@angular/material';
import {EditItemDialogComponent} from './edit-item-dialog/';

@Component({
    selector: 'app-item-card',
    templateUrl: './item-card.component.html',
    styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

    @Input()
    item: Item;

    @Output()
    itemDeletedEmitter: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    itemCollectedEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    itemEditedEmitter: EventEmitter<any> = new EventEmitter();

    @ViewChild("slideToggle")
    slideToggle: MdSlideToggle;
    
    constructor(private dialog: MdDialog) {}

    ngOnInit() {
        if (this.item.collected){
            this.slideToggle.toggle();
        }
    }

    onEditButtonClicked() {
        let dialogRef = this.dialog.open(EditItemDialogComponent, {
            data: this.item,
        });
        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {
            // if a service was used we'd update the item here
            this.itemEditedEmitter.emit();
        });
    }

    onDeleteButtonClicked() {
        this.itemDeletedEmitter.emit(this.item.name);
    }

    doToggleChecked() {
        this.item.collected = !this.item.collected;
        this.itemCollectedEmitter.emit();
    }

}
