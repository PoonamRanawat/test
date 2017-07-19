import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfm-page-list',
  templateUrl: './page-list.component.html',
  styles: []
})
export class PageListComponent implements OnInit {
    pageListCollapse = true;
    // todo: page list items will come from an API call
    pageList = [
        { pageId: 1, pageName: 'page1' },
        { pageId: 2, pageName: 'page2' },
        { pageId: 3, pageName: 'page3' },
        { pageId: 4, pageName: 'page4' }
    ];

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
