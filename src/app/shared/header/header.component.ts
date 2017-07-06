import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MenuService} from '../../core/menu.service';

@Component({
    selector: 'cfm-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    notifications: any;
    languages: any;
    private sideBarToggle = false;

    @Output() addToggleClass: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private menuService: MenuService) {
    }

    ngOnInit() {
        this.notifications = this.menuService.getMenuConfig('alerts');
        this.languages = this.menuService.getMenuConfig('languages');
    }

    /**
     * Add toggle to side menu
     */
    addToggleClassSideMenu(): void {
        this.sideBarToggle = !this.sideBarToggle;
        this.addToggleClass.emit(!this.sideBarToggle);
    }
}
