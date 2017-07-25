import {Component, OnInit, Input} from '@angular/core';
import {PageService} from '../../../../../page.service'

@Component({
    selector: 'cfm-page-thumbnail',
    templateUrl: './page-thumbnail.component.html',
    styles: []
})
export class PageThumbnailComponent implements OnInit {

    @Input() pageId: number;
    @Input() pageName: string;

    constructor(private pageService: PageService) {
    }

    ngOnInit() {
    }

    /**
     * creates a copy of selected page
     */
    copyPage(pageId: number) {
        // copy page API will come here and pageId will be passed in.
        this.pageService.copyPage(pageId);
    }

}
