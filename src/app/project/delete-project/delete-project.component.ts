import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
    selector: 'cfm-delete-project',
    templateUrl: './delete-project.component.html',
    styles: []
})
export class DeleteProjectComponent implements OnInit {
    @ViewChild('deleteProjectModal') public modal: ModalDirective;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Show modal
     */
    showDeleteProjectModal(): void {
        this.modal.show();
    }

    /**
     * Hide modal
     */
    hideDeleteProjectModal(): void {
        this.modal.hide();
    }

    /**
     * Delete Project
     */
    private deleteProject(): void {
        console.log('Delete project API will come here');
        this.hideDeleteProjectModal();
    }
}
