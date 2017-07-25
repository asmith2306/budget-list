import {TestBed, async} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {ItemCardListComponent} from './item-card-list/item-card-list.component';
import {ItemCardComponent} from './item-card/item-card.component';
import {LocalStorageService, ILocalStorageServiceConfig} from 'angular-2-local-storage';

describe('AppComponent', () => {
    class MockStorage implements ILocalStorageServiceConfig {}
    let mockLocalStorageServiceConfig: MockStorage = new MockStorage();
    let mockLocalStorageService: LocalStorageService = new LocalStorageService(mockLocalStorageServiceConfig);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                ItemCardListComponent,
                ItemCardComponent
            ],
            imports: [MaterialModule],
            providers: [{provide: LocalStorageService, useValue: mockLocalStorageService}] // not sure why we need this as it's not a direct dependency
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});


