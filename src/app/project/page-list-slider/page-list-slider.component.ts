import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cfm-page-list-slider',
    templateUrl: './page-list-slider.component.html',
    styles: [],
})
export class PageListSliderComponent implements OnInit {
    private sideBarCollapse: boolean = false;
    private pageListCollapse: boolean = true;
    private groupListCollapse: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Toggle slider
     */
    toggleSideBar() {
        this.sideBarCollapse = !this.sideBarCollapse;
    }

    /**
     * Toggle page list
     */
    togglePageList() {
        this.pageListCollapse = !this.pageListCollapse;
    }

    /**
     * Toggle group list
     */
    toggleGroupList() {
        this.groupListCollapse = !this.groupListCollapse;
    }

}
