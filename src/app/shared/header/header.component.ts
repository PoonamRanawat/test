import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MenuService} from '../../core/menu.service';
import {ProjectService} from '../../core/project.service';
import {Menu} from '../../core/menu';

@Component({
    selector: 'cfm-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    notifications: any;
    languages: any;
    notificationData: any;
    private sideBarToggle = true;

    @Output() addToggleClass: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private menuService: MenuService, private projectService: ProjectService) {
        this.projectService.getReloadedProjects().subscribe(reloadMenuItems => {
            this.getNotifications(reloadMenuItems);
        });
    }

    ngOnInit() {
        this.getNotifications();
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

    /**
     * Get notifications
     *
     * @param reloadMenuItems
     */
    getNotifications(reloadMenuItems = false): void {
        this.menuService.getNotifications().subscribe(
            result => {
                this.notificationData = result['Data'];
                this.prepareNotificationMenuItems(reloadMenuItems);
            },
            error => {
                console.log(error);
            }
        )
    }

    /**
     * Prepare notifications menu items
     *
     * @param reloadMenuItems
     */
    prepareNotificationMenuItems(reloadMenuItems = false): void {
        if (reloadMenuItems) {
            this.menuService.delete('alerts');
        }

        for (let notification of this.notificationData) {
            this.menuService.add('alerts', {
                position: 1, Name: notification['Message'], Exec: (selected: Menu) => {
                },
                Children: null,
                IconClass: 'fa fa-plus',
                IconSource: notification['CreatedOn'],
                showInMenu: true,
                Route: ''
            });

        }
        this.notifications = this.menuService.getMenuConfig('alerts');
    }
}
