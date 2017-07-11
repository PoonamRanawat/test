import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cfm-page-list-slider',
    templateUrl: './page-list-slider.component.html',
    styles: [],
})
export class PageListSliderComponent implements OnInit {
    sideBarCollapse = false;
    constructor() {
    }

    ngOnInit() {
    }
    toggleSideBar() {
        this.sideBarCollapse = !this.sideBarCollapse;
    }
}
