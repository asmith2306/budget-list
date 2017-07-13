import {Item} from 'app/models/item';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-item-card',
    templateUrl: './item-card.component.html',
    styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

    @Input()
    item: Item;

    @Output()
    itemDeletedEmitter: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {
    }

    onDeleteButtonClicked() {
        this.itemDeletedEmitter.emit(this.item.name);
    }


}
