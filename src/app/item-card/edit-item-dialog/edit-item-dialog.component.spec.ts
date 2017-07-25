import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {EditItemDialogComponent} from 'app/item-card/edit-item-dialog/edit-item-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('EditItemDialogComponent', () => {
    let component: EditItemDialogComponent;
    let fixture: ComponentFixture<EditItemDialogComponent>;
    let mdDialogSpy = jasmine.createSpy('MdDialogRef');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditItemDialogComponent],
            imports: [ReactiveFormsModule, FormsModule, MaterialModule, BrowserAnimationsModule],
            providers: [{provide: MdDialogRef, useClass: mdDialogSpy}, {provide: MD_DIALOG_DATA, useValue: {}}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditItemDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
