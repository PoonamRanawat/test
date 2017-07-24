import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {AddPage} from './add-page';
import {ConfigService} from '../../core/config.service';
import {ProjectService} from '../../core/project.service'
import * as _ from 'lodash';
import {ToastsManager} from 'ng2-toastr';
import {PageService} from '../page.service'


@Component({
    selector: 'cfm-add-page',
    templateUrl: './add-page.component.html',
    styles: []
})
export class AddPageComponent implements OnInit {
    modeType: number;
    projectId: number;
    model: AddPage = new AddPage();
    pageTypes = [];
    questionType = [];
    subPageType = [];
    @ViewChild('addPageForm') form: any;
    @ViewChild('addPageModal') public modal: ModalDirective;

    constructor(private route: ActivatedRoute,
                private configService: ConfigService,
                private projectService: ProjectService,
                public toastr: ToastsManager,
                private pageService: PageService,
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.projectId = +params['id'];
        });

        this.projectService.getProjectData(this.projectId).subscribe(
            result => {
                this.modeType = result['Data']['QuestionnaireTypeId'];
                this.pageTypes = this.configService.getConfigPropertyByModeId(this.modeType)['PageTypes'];
            }, error => {
                this.toastr.error(error);
            }
        );
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
    addPage(form: NgForm): void {
        if (!form.valid) {
            return;
        }
        const createPage = {
            'Id': 0,
            'Name': form.value.pagename,
            'PageTypeId': form.value.pageType,
            'SubPageTypeId': (form.value.subPage) ? form.value.subPage : null,
            'QuestionTypeId': (form.value.question) ? form.value.question : null,
            'QuestionnaireId': this.projectId
        };
        this.pageService.createPage(createPage).subscribe(
            result => {
                this.toastr.success(result['Message']);
                this.hideAddPageModal();
            },
            error => {
                this.toastr.error(JSON.parse(error._body).Message);
            }
        )
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
