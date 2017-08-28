import {Item} from 'app/models/item';
import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {MdDialog, MdSlideToggle} from '@angular/material';
import {EditItemDialogComponent} from './edit-item-dialog/';
import {FormGroup, FormBuilder} from '@angular/forms';

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

    itemForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        if (this.item.collected) {
            this.slideToggle.toggle();
        }
        this.setupForm();
    }

    onDeleteButtonClicked() {
        this.itemDeletedEmitter.emit(this.item.name);
    }

    doToggleChecked() {
        this.item.collected = !this.item.collected;
        this.itemCollectedEmitter.emit();
    }

    private setupForm(): void {
        this.itemForm = this.fb.group({
            itemName: '',
            itemPrice: ''
        });
        this.itemForm.controls["itemName"].valueChanges.subscribe(change => {
            this.item.name = change;
            this.itemEditedEmitter.emit();
        })
        this.itemForm.controls["itemPrice"].valueChanges.subscribe(change => {
            this.item.price = change;
            this.itemEditedEmitter.emit();
        })
    }

}
