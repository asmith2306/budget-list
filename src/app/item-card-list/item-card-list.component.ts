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

    private itemCounter = 0;

    items: Array<Item>;

    @Output()
    itemTotalEmitter: EventEmitter<number> = new EventEmitter<number>();

    constructor(private dialog: MdDialog, private localStorageService: LocalStorageService) {}

    ngOnInit() {
        this.items = JSON.parse(this.localStorageService.get<string>("items"));
        if (null === this.items) {
            this.items = new Array<Item>();
        }
        this.doTotals();
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
        this.itemCounter--;
        this.doTotals();
    }

    addItem() {
        let item: Item = new Item();
        item.name = "item-" + this.itemCounter++;
        item.price = 0; //need to investigate why this doesn't work in totals (produces NaN if no price defined)
        this.items.push(item);
        this.doTotals();
    }

    public doTotals() {
        let tempTotal: number = 0;
        this.items.forEach(item => {
            if (item.collected && item.price != undefined) {
                tempTotal += Number(item.price);
            }
        });
        this.itemTotalEmitter.emit(tempTotal);
        this.itemCounter = this.items.length;
    }

}
