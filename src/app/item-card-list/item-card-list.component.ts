import {Item} from 'app/models/item';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AddItemDialogComponent} from "./add-item-dialog/add-item-dialog.component";

@Component({
    selector: 'app-item-card-list',
    templateUrl: './item-card-list.component.html',
    styleUrls: ['./item-card-list.component.css']
})
export class ItemCardListComponent implements OnInit {

    items = new Array<Item>();

    @Output()
    itemTotalEmitter: EventEmitter<number> = new EventEmitter<number>();

    constructor(private dialog: MdDialog) {}

    ngOnInit() {
        let item = new Item();
        item.name = "item";
        item.price = 9.99;
        this.items.push(item);
    }

    removeItem(itemName: string) {
        var i = this.items.length;
        while (i--) {
            if (this.items[i].name == itemName) {
                this.items.splice(i, 1);
            }
        }
        this.doTotals();
    }

    addItem() {
        let dialogRef = this.dialog.open(AddItemDialogComponent);
        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {
            this.items.push(result);
            this.doTotals();
        });
    }

    public doTotals() {
        let tempTotal: number = 0;
        this.items.forEach(item => {
            if (item.collected) {
                tempTotal += item.price;
            }
        });
        this.itemTotalEmitter.emit(tempTotal);
    }

}
