import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cfm-page-list-slider',
    templateUrl: './page-list-slider.component.html',
    styles: [],
})
export class PageListSliderComponent implements OnInit {
    sideBarCollapse: boolean = false;
    pageListCollapse: boolean = true;
    groupListCollapse: boolean = true;
    constructor() {
    }

    ngOnInit() {
    }
    toggleSideBar() {
        this.sideBarCollapse = (this.sideBarCollapse === false) ? true : false;
    }
    togglePageList() {
        this.pageListCollapse = (this.pageListCollapse === true) ? false : true;
    }
    toggleGroupList() {
        this.groupListCollapse = (this.groupListCollapse === true) ? false : true;
    }

}
