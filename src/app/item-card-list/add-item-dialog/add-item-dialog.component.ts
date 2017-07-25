import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {MdDialogRef} from '@angular/material';

import {Item} from 'app/models/item';

@Component({
    selector: 'app-add-item-dialog',
    templateUrl: './add-item-dialog.component.html',
    styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent implements OnInit {

    item: Item;
    
    itemForm: FormGroup;

    constructor(private fb: FormBuilder, private dialogRef: MdDialogRef<AddItemDialogComponent>) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.itemForm = this.fb.group({
            name: '',
            price: ''
        });
    }

    done() {
        this.item = new Item();
        this.item.name = this.itemForm.get('name').value;
        this.item.price = Number(this.itemForm.get('price').value);
        this.dialogRef.close(this.item);
    }
}
