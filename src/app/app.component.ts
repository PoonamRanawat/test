import {Component, ViewContainerRef, OnInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized} from '@angular/router';
import {MenuService} from './core/menu.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Menu} from './core/menu';
import {ConfigService} from './core/config.service';
import {ProjectService} from './core/project.service';

@Component({
    selector: 'cfm-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    flag: boolean;

    constructor(public toastr: ToastsManager,
                vcr: ViewContainerRef,
                private menuService: MenuService,
                private configService: ConfigService,
                private projectService: ProjectService,
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
        const projects = this.projectService.getProjects();
        let projectMenuItems = [];
        for (let i = 0; i < projects.length; i++) {
            projectMenuItems.push({
                position: 1,
                Name: projects[i]['name'],
                Exec: (selected: Menu) => {
                },
                Children: [{
                    position: 1,
                    Name: 'Questionnaire',
                    Exec: (selected: Menu) => {
                    },
                    Children: null,
                    IconClass: 'null',
                    IconSource: null,
                    showInMenu: true,
                    Route: `/project/${projects[i]['id']}/questionnaire`
                }],
                IconClass: 'null',
                IconSource: null,
                showInMenu: true,
                Route: `/project/${projects[i]['id']}`
            });
        }

        this.menuService.add('languages', {
            position: 1,
            Name: 'English',
            Exec: (selected: Menu) => {
            },
            Children: null,
            IconClass: null,
            IconSource: './assets/global/img/flags/us.png',
            showInMenu: true,
            Route: ''
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

        this.menuService.add('alerts', {
            position: 1, Name: 'Alert 1', Exec: (selected: Menu) => {
            }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
        });
        this.menuService.add('alerts', {
            position: 1, Name: 'Alert 2', Exec: (selected: Menu) => {
            }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
        });
        this.menuService.add('alerts', {
            position: 1, Name: 'Alert 3', Exec: (selected: Menu) => {
            }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
        });
        this.menuService.add('alerts', {
            position: 1, Name: 'Alert 4', Exec: (selected: Menu) => {
            }, Children: null, IconClass: null, IconSource: null, showInMenu: true, Route: ''
        });

        //Sidebar menu
        this.menuService.add('left', {
            position: 1, Name: 'Home', Exec: (selected: Menu) => {
            }, Children: null, IconClass: 'icon-home', IconSource: null, showInMenu: true, Route: '/'
        });


        this.menuService.add('left', {
            position: 1,
            Name: 'Data collection',
            Exec: (selected: Menu) => {
            },
            Children: projectMenuItems,
            IconClass: 'icon-puzzle',
            IconSource: null,
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
