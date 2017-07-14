import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import {Item} from 'app/models/item';

@Component({
    selector: 'edit-add-item-dialog',
    templateUrl: './edit-item-dialog.component.html',
    styleUrls: ['./edit-item-dialog.component.css']
})
export class EditItemDialogComponent implements OnInit {

    itemForm: FormGroup;

    constructor(private fb: FormBuilder, private dialogRef: MdDialogRef<EditItemDialogComponent>, @Inject(MD_DIALOG_DATA) public data: Item) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.itemForm = this.fb.group({
            name: this.data.name,
            price: this.data.price
        });
    }

    done() {
        this.data.name = this.itemForm.get('name').value;
        this.data.price = Number(this.itemForm.get('price').value);
        this.dialogRef.close();
    }
}
