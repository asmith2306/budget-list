import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {ItemCardListComponent} from './item-card-list.component';
import {ItemCardComponent} from 'app/item-card/item-card.component';
import {LocalStorageService, ILocalStorageServiceConfig} from 'angular-2-local-storage';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ItemCardListComponent', () => {
    let component: ItemCardListComponent;
    let fixture: ComponentFixture<ItemCardListComponent>;
    class MockStorage implements ILocalStorageServiceConfig {};
    let mockLocalStorageServiceConfig: MockStorage = new MockStorage();
    let mockLocalStorageService: LocalStorageService = new LocalStorageService(mockLocalStorageServiceConfig);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemCardListComponent, ItemCardComponent],
            imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
            providers: [{provide: LocalStorageService, useValue: mockLocalStorageService}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemCardListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
