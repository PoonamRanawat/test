import {Component, ViewContainerRef, OnInit} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {MenuService} from './core/menu.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Menu} from './core/menu';

@Component({
    selector: 'cfm-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    flag: boolean;

    constructor(public toastr: ToastsManager,
                vcr: ViewContainerRef,
                private menuService: MenuService,
                private router: Router) {
        this.toastr.setRootViewContainerRef(vcr);
        // Opening the side menu on page change.
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                this.sideMenuToggle(false);
            }
        });
    }

    ngOnInit() {
        // @todo: Change this with menu API. Right now it is hardcoded values.
        this.menuService.add('languages', {
            position: 1,
            Name: 'English',
            Exec: (selected: Menu) => {
            },
            Children: null,
            IconClass: null,
            IconSource: './assets/global/img/flags/us.png',
            showInMenu: true,
            Route: '',
        });
        this.menuService.add('languages', {
            position: 1,
            Name: 'French',
            Exec: (selected: Menu) => {
            },
            Children: null,
            IconClass: null,
            IconSource: './assets/global/img/flags/fr.png',
            showInMenu: true,
            Route: ''
        });
        this.menuService.add('languages', {
            position: 1,
            Name: 'German',
            Exec: (selected: Menu) => {
            },
            Children: null,
            IconClass: null,
            IconSource: './assets/global/img/flags/de.png',
            showInMenu: true,
            Route: ''
        });
        this.menuService.add('languages', {
            position: 1,
            Name: 'Russian',
            Exec: (selected: Menu) => {
            },
            Children: null,
            IconClass: null,
            IconSource: './assets/global/img/flags/ru.png',
            showInMenu: true,
            Route: ''
        });

        this.menuService.add('quick', {
            position: 1, Name: 'Quick Menu 1', Exec: (selected: Menu) => {
            }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/dashboard'
        });
        this.menuService.add('quick', {
            position: 1, Name: 'Quick Menu 2', Exec: (selected: Menu) => {
            }, Children: null, IconClass: 'icon-magnifier', IconSource: null, showInMenu: true, Route: '/dashboard'
        });
    }

    /**
     * Side menu toggle
     *
     * @param value
     */
    sideMenuToggle(value: boolean): void {
        this.menuService.setToggleClass(value);
        this.flag = this.menuService.getToggleClass();
    }
}
