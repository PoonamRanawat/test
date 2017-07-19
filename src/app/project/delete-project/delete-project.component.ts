import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {ProjectService} from '../../core/project.service';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';

@Component({
    selector: 'cfm-delete-project',
    templateUrl: './delete-project.component.html',
    styles: []
})
export class DeleteProjectComponent implements OnInit {
    @ViewChild('deleteProjectModal') public modal: ModalDirective;
    @Input('projectId') public projectId: number;
    @Output() reloadProjects = new EventEmitter();

    constructor(private projectService: ProjectService, public toastr: ToastsManager, private router: Router) {
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
    deleteProject(): void {
        this.projectService.deleteProject(this.projectId).subscribe(
            result => {
                this.toastr.success('Project deleted successfully');
                this.reloadProjects.next();
                this.hideDeleteProjectModal();
                this.router.navigateByUrl('/');
            },
            error => {
                this.toastr.error(error);
            }
        );
    }
}
