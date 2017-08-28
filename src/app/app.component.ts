import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    toolbarTotal: string;

    ngOnInit() {
        this.toolbarTotal = "0.00";
    }

    updateToolbarTotal(total: number) {
        this.toolbarTotal = total.toFixed(2);
    }
}
