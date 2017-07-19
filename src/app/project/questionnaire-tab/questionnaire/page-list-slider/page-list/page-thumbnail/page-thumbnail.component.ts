import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'cfm-page-thumbnail',
    templateUrl: './page-thumbnail.component.html',
    styles: []
})
export class PageThumbnailComponent implements OnInit {

    @Input() pageId: number;
    @Input() pageName: string;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * creates a copy of selected page
     */
    copyPage() {
        console.log('Copy the Page' + this.pageId);
    }

}
