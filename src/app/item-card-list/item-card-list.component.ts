import { Item } from '../models/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card-list',
  templateUrl: './item-card-list.component.html',
  styleUrls: ['./item-card-list.component.css']
})
export class ItemCardListComponent implements OnInit {

  items = new Array<Item>();

  constructor() {}

  ngOnInit() {
    for(let i=0;i<4;i++) {
      this.items.push(new Item('Item-'+i,1*i));
    }
  }

}
