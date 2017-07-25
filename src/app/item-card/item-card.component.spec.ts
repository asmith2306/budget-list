import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {ItemCardComponent} from './item-card.component';
import {Item} from 'app/models/item';

describe('ItemCardComponent', () => {
    let component: ItemCardComponent;
    let fixture: ComponentFixture<ItemCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemCardComponent],
            imports: [MaterialModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemCardComponent);
        component = fixture.componentInstance;
        component.item = new Item(); // need to instantiate uninitialised inputs...
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
