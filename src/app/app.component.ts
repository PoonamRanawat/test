import {Component, ViewContainerRef, OnInit} from '@angular/core';
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
                private menuService: MenuService) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        //@todo: Change this with menu API. Right now it is hardcoded values.
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

        this.menuService.add('left', {
            position: 1, Name: "Home", Exec: (selected: Menu) => {
                alert('Russian');
            }, Children: null, IconClass: "icon-home", IconSource: null, showInMenu: true, Route: '/'
        });
        this.menuService.add('left', {
            position: 1, Name: "Menu 2", Exec: (selected: Menu) => {
                alert('Russian');
            }, Children: null, IconClass: "icon-magnifier", IconSource: null, showInMenu: true, Route: '/dashboard'
        });
        this.menuService.add('left', {
            position: 1, Name: "Menu 3", Exec: (selected: Menu) => {
                alert('Russian');
            }, IconClass: "icon-home", IconSource: null, showInMenu: true, Route: '', Children: [
                {
                    position: 1, Name: "Menu 3.1", Exec: (selected: Menu) => {
                    alert('Russian');
                }, Children: null, IconClass: "icon-magnifier", IconSource: null, showInMenu: true, Route: '/projects'
                },
                {
                    position: 1, Name: "Menu 3.2", Exec: (selected: Menu) => {
                    alert('Russian');
                }, Children: null, IconClass: "icon-magnifier", IconSource: null, showInMenu: true, Route: '/projects'
                },
                {
                    position: 1, Name: "Menu 3.3", Exec: (selected: Menu) => {
                    alert('Russian');
                }, Children: null, IconClass: "icon-magnifier", IconSource: null, showInMenu: true, Route: '/dashboard'
                }
            ]
        });

        this.menuService.add('quick', {
            position: 1, Name: "Quick Menu 1", Exec: (selected: Menu) => {
                alert('Quick Menu 1');
            }, Children: null, IconClass: "icon-magnifier", IconSource: null, showInMenu: true, Route: '/dashboard'
        });
        this.menuService.add('quick', {
            position: 1, Name: "Quick Menu 2", Exec: (selected: Menu) => {
                alert('Quick Menu 2');
            }, Children: null, IconClass: "icon-magnifier", IconSource: null, showInMenu: true, Route: '/dashboard'
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
