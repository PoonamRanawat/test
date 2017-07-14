import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
    selector: 'cfm-delete-page',
    templateUrl: './delete-page.component.html',
    styles: []
})
export class DeletePageComponent implements OnInit {

    @ViewChild('deletePageModal') public modal: ModalDirective;
    pageId: number;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Show modal
     */
    showDeletePageModal(pageId: number): void {
        this.pageId = pageId;
        this.modal.show();
    }

    /**
     * Hide modal
     */
    hideDeletePageModal(): void {
        this.modal.hide();
    }

    /**
     * Delete page
     */
    deletePage(): void {
        console.log('Delete Page API will come here PageId = ' + this.pageId);
    }
}
