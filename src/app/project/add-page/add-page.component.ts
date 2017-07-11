import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {AddPage} from './add-page';

@Component({
    selector: 'cfm-add-page',
    templateUrl: './add-page.component.html',
    styles: []
})
export class AddPageComponent implements OnInit {
    model: AddPage = new AddPage();
    @ViewChild('addPageForm') form: any;
    @ViewChild('addPageModal') public modal: ModalDirective;

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
     * Add Page
     */
    addPage(): void {
        console.log("ds");
        // if (this.form.valid) {
        //     console.log("Form Submitted!");
        //     //this.form.reset();
        // }
    }

}
