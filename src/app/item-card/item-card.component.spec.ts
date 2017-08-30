import {async, ComponentFixture, TestBed, } from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {ItemCardComponent} from './item-card.component';
import {Item} from 'app/models/item';
import {By} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ItemCardComponent', () => {
    let component: ItemCardComponent;
    let fixture: ComponentFixture<ItemCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemCardComponent],
            imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemCardComponent);
        component = fixture.componentInstance;
        component.item = new Item(); // need to instantiate uninitialised inputs...
        component.item.name = "Test";
        component.item.price = 1.00;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct item name', () => {
        let nameInputElement = fixture.debugElement.query(By.css('#itemName'));
        expect(nameInputElement.properties["value"]).toEqual("Test");
    });

    it('should have correct item price', () => {
        let priceInputElement = fixture.debugElement.query(By.css('#itemPrice'));
        expect(priceInputElement.properties["value"]).toEqual(String(1.00));
    });

    it('should toggle collected', () => {
        expect(component.item.collected).toBeFalsy();
        let collectedToggleElement = fixture.debugElement.query(By.css('#collectedToggle'));
        collectedToggleElement.triggerEventHandler("change", null);
        expect(component.item.collected).toBeTruthy();
    });

    it('should emit item name when delete clicked', () => {
        let emittedItemName: string;
        component.itemDeletedEmitter.subscribe((emitted: string) => {
            emittedItemName = emitted;
        });

        let deleteButtonElement = fixture.debugElement.query(By.css('#deleteButton'));
        deleteButtonElement.triggerEventHandler("click", null);
        expect(emittedItemName).toEqual("Test");
    });
});
