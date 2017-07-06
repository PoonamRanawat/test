import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../core/menu.service';

@Component({
    selector: 'cfm-side-bar',
    templateUrl: './side-bar.component.html'
})

export class SideBarComponent implements OnInit {
    sidebarToggleFlag: boolean;
    private _opened: Array<boolean> = [];

    constructor(public menuService: MenuService) {
    }

    ngOnInit() {
        this.sidebarToggleFlag = this.menuService.getToggleClass();
    }
}
