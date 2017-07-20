import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../core/menu.service';
import {ProjectService} from '../../core/project.service';
import {Menu} from '../../core/menu';
import {ToastsManager} from 'ng2-toastr';

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
    projects = [];
    projectMenuItems = [];

    constructor(public menuService: MenuService, private projectService: ProjectService, public toastr: ToastsManager) {
        this.projectService.getReloadedProjects().subscribe(reloadMenuItems => {
            this.getProjects(reloadMenuItems);
        });
    }

    ngOnInit() {
        this.menuItems = this.menuService.getMenuConfig('left');
        this.sidebarToggleFlag = this.menuService.getToggleClass();

        //Sidebar menu
        this.menuService.add('left', {
            position: 1, Name: 'Home', Exec: (selected: Menu) => {
            }, Children: null, IconClass: 'icon-home', IconSource: null, showInMenu: true, Route: '/'
        });

        this.getProjects();
    }

    /**
     * Activate the sidebar menu item
     *
     * @param index
     */
    activateMenuItem(index: number): void {
        this.isActive = index;
        this.isOpen = !this.isOpen;
    }

    /**
     * Get projects
     *
     * @param updateProjectMenuItems
     */
    getProjects(updateProjectMenuItems = false): void {
        this.projectService.getProjects().subscribe(
            result => {
                this.projects = result['Data'];
                this.prepareProjectMenuItems(updateProjectMenuItems);
            },
            error => {
                this.toastr.error(error);
            }
        );
    }

    /**
     * Prepare project menu items
     *
     * @param updateProjectMenuItems
     */
    prepareProjectMenuItems(updateProjectMenuItems = false): void {

        if (updateProjectMenuItems) {
            this.projectMenuItems = [];
        }

        for (let i = 0; i < this.projects.length; i++) {
            this.projectMenuItems.push({
                position: 1,
                Name: this.projects[i]['Name'],
                Exec: (selected: Menu) => {
                },
                Children: [{
                    position: 1,
                    Name: 'Questionnaire',
                    Exec: (selected: Menu) => {
                    },
                    Children: null,
                    IconClass: 'icon-puzzle',
                    IconSource: null,
                    showInMenu: true,
                    Route: `/project/${this.projects[i]['QuestionnaireId']}/questionnaire`
                }],
                IconClass: 'icon-puzzle',
                IconSource: null,
                showInMenu: true,
                Route: `/project/${this.projects[i]['QuestionnaireId']}`
            });
        }

        const projectMenu = {
            position: 1,
            Name: 'Data collection',
            Exec: (selected: Menu) => {
            },
            Children: this.projectMenuItems,
            IconClass: 'icon-settings',
            IconSource: null,
            showInMenu: true,
            Route: ''
        };

        updateProjectMenuItems ? this.menuService.update('left', projectMenu) : this.menuService.add('left', projectMenu);
    }

}
