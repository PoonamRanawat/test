import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfm-page-list',
  templateUrl: './page-list.component.html',
  styles: []
})
export class PageListComponent implements OnInit {
    private pageListCollapse = true;
    // todo: page list items will come from an API call
    pageList = [{pageId: 1, pageName: 'single'}, {pageId: 2, pageName: 'double'}, {pageId: 3, pageName: 'multi'}];

    constructor() {
    }

    ngOnInit() {
    }

    /**
     *  Toggle page list
     *
     */
    togglePageList() {
        this.pageListCollapse = !this.pageListCollapse;
    }

}
