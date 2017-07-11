import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfm-page-list',
  templateUrl: './page-list.component.html',
  styles: []
})
export class PageListComponent implements OnInit {
    pageListCollapse = true;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     *  Toggle page list
     */
    togglePageList() {
        this.pageListCollapse = !this.pageListCollapse;
    }

}
