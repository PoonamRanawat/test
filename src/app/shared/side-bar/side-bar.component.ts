import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../core/menu.service';

@Component({
    selector: 'cfm-side-bar',
    templateUrl: './side-bar.component.html'
})

export class SideBarComponent implements OnInit {
    sidebarToggleFlag: boolean;
    isActive: number;
    isOpen = false;
    opened: Array<boolean> = [];
    menuItems: any;

    constructor(public menuService: MenuService) {
    }

    ngOnInit() {
        this.menuItems = this.menuService.getMenuConfig('left');
        this.sidebarToggleFlag = this.menuService.getToggleClass();
    }

    activateMenuItem(i: number) {
        this.isActive = i;
        this.isOpen = !this.isOpen;
        console.log(this.isActive);
    }
}
