import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MenuService} from '../menu.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    private sideBarToggle = false;
    private notifications: any;
    @Output() addToggleClass: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private menuService: MenuService) {
    }

    ngOnInit() {
        this.notifications = this.menuService.getMenuConfig('alerts');
    }

    /**
     * Add toggle to side menu
     */
    addToggleClassSideMenu(): void {
        this.sideBarToggle = !this.sideBarToggle;
        this.addToggleClass.emit(!this.sideBarToggle);
    }
}
