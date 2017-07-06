import {Component, ViewContainerRef, OnInit} from '@angular/core';
import {CoreService} from './core/core.service';
import {MenuService} from './core/menu.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Menu} from './core/menu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    flag: boolean;

    constructor(public core: CoreService,
                public toastr: ToastsManager,
                vcr: ViewContainerRef,
                private menuService: MenuService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        //@todo: Change this with menu API. Right now it is hardcoded values.

        this.menuService.add('languages',
            {
                position: 1,
                Name: "English",
                Exec: (selected: Menu) => {
                    alert('English');
                },
                Children: null,
                IconClass: null,
                IconSource: "/assets/global/img/flags/us.png",
                showInMenu: true,
                Route: ''
            }
        );
        this.menuService.add('languages', {
            position: 1,
            Name: "French",
            Exec: (selected: Menu) => {
                alert('French');
            },
            Children: null,
            IconClass: null,
            IconSource: "/assets/global/img/flags/fr.png",
            showInMenu: true,
            Route: ''
        });
        this.menuService.add('languages', {
            position: 1,
            Name: "German",
            Exec: (selected: Menu) => {
                alert('German');
            },
            Children: null,
            IconClass: null,
            IconSource: "/assets/global/img/flags/de.png",
            showInMenu: true,
            Route: ''
        });
        this.menuService.add('languages', {
            position: 1,
            Name: "Russian",
            Exec: (selected: Menu) => {
                alert('Russian');
            },
            Children: null,
            IconClass: null,
            IconSource: "/assets/global/img/flags/ru.png",
            showInMenu: true,
            Route: ''
        });

        this.menuService.add('alerts', {
            position: 1, Name: "Alert 1", Exec: (selected: Menu) => {
                alert('Russian');
            }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
        });
        this.menuService.add('alerts', {
            position: 1, Name: "Alert 2", Exec: (selected: Menu) => {
                alert('Russian');
            }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
        });
        this.menuService.add('alerts', {
            position: 1, Name: "Alert 3", Exec: (selected: Menu) => {
                alert('Russian');
            }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
        });
        this.menuService.add('alerts', {
            position: 1, Name: "Alert 4", Exec: (selected: Menu) => {
                alert('asd');
            }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
        });

    }

    /**
     * Side menu toggle
     *
     * @param value
     */
    sideMenuToggle(value: boolean): void {
        this.core.setToggleClass(value);
        this.flag = this.core.getToggleClass();
    }

}
