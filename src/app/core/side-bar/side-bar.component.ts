import {Component, OnInit} from '@angular/core';
import {CoreService} from '../core.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html'
})

export class SideBarComponent implements OnInit {
    sidebarToggleFlag: boolean;
    private _opened: Array<boolean> = [];

    constructor(public core: CoreService) {
    }

    ngOnInit() {
        this.sidebarToggleFlag = this.core.getToggleClass();
    }
}
