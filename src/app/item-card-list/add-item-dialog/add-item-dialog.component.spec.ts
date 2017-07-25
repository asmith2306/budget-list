import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {AddItemDialogComponent} from './add-item-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AddItemDialogComponent', () => {
    let component: AddItemDialogComponent;
    let fixture: ComponentFixture<AddItemDialogComponent>;
    let mdDialogSpy = jasmine.createSpy('MdDialogRef');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddItemDialogComponent],
            imports: [ReactiveFormsModule, FormsModule, MaterialModule, BrowserAnimationsModule],
            providers: [{provide: MdDialogRef, useClass: mdDialogSpy}, {provide: MD_DIALOG_DATA, useClass: {}}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddItemDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
