import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../core/menu.service';

@Component({
    selector: 'cfm-quick-menu',
    templateUrl: './quick-menu.component.html',
})
export class QuickMenuComponent implements OnInit {
    menuItems: any;
    private menuToggle = false;

    constructor(private menuService: MenuService) {
    }

    ngOnInit() {
        this.menuItems = this.menuService.getMenuConfig('quick');
    }

    /**
     * Quick menu toggle
     */
    onClickMenuToggle() {
        this.menuToggle = !this.menuToggle;
    }

    /**
     * Close quick menu
     */
    closeMenu() {
        this.menuToggle = false;
    }

}
