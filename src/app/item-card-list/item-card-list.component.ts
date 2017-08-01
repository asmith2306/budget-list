import {Item} from 'app/models/item';
import {Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AddItemDialogComponent} from "./add-item-dialog/add-item-dialog.component";
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
    selector: 'app-item-card-list',
    templateUrl: './item-card-list.component.html',
    styleUrls: ['./item-card-list.component.scss']
})
export class ItemCardListComponent implements OnInit {

    items: Array<Item>;

    @Output()
    itemTotalEmitter: EventEmitter<number> = new EventEmitter<number>();

    constructor(private dialog: MdDialog, private localStorageService: LocalStorageService) {}

    ngOnInit() {
        this.items = JSON.parse(this.localStorageService.get<string>("items"));
        console.log(this.items);
        if (null === this.items) {
            this.items = new Array<Item>();
        }
    }

    @HostListener('window:beforeunload')
    beforeUnload() {
        // Put the items into storage on page close or refresh
        this.localStorageService.set("items", JSON.stringify(this.items));
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
