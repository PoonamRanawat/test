import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ModalDirective} from 'ngx-bootstrap/modal';
import {AddPage} from './add-page';
import {ConfigService} from '../../core/config.service';
import {ProjectService} from '../../core/project.service'
import * as _ from 'lodash';

@Component({
    selector: 'cfm-add-page',
    templateUrl: './add-page.component.html',
    styles: []
})
export class AddPageComponent implements OnInit {
    modeType: number;
    projectId: number;
    model: AddPage = new AddPage();
    private pageTypes = [];
    private questionType = [];
    private subPageType = [];
    @ViewChild('addPageForm') form: any;
    @ViewChild('addPageModal') public modal: ModalDirective;

    constructor(private route: ActivatedRoute,
                private configService: ConfigService,
                private projectService: ProjectService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.projectId = +params['id'];
        });
        this.modeType = this.projectService.getProject(this.projectId)['type'];
        this.pageTypes = this.configService.getConfigPropertyByModeId(this.modeType)['PageTypes'];
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
     * Create Page
     *
     * @param addPageForm
     */
    addPage(form) {
        if (!form.valid) {
            return;
        }
        console.log(form.value)
    }

    /**
     * Get question and subPageType type By page type.
     *
     * @param value
     */
    getDependentQuestionType(value: number): void {
        const valueIndex = _.findIndex(this.pageTypes, (o) => {
            return o['ID'] === +value;
        });
        this.subPageType = this.pageTypes[valueIndex]['SubPageTypes'] ? this.pageTypes[valueIndex]['SubPageTypes'] : [];
        this.questionType = this.pageTypes[valueIndex]['QuestionTypes'] ? this.pageTypes[valueIndex]['QuestionTypes'] : [];
    }
}
