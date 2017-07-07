import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
    selector: 'cfm-add-page',
    templateUrl: './add-page.component.html',
    styles: []
})
export class AddPageComponent implements OnInit {

    @ViewChild('appPageModal') public modal: ModalDirective;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Show modal
     */
    showAddPageModal(): void {
        this.modal.show();
    }

    /**
     * Hide modal
     */
    hideAddPageModal(): void {
        this.modal.hide();
    }

    /**
     * Delete Project
     */
    private CreateProject(): void {
        console.log('Delete project API will come here');
    }

}
