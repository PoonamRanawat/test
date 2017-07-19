import {Component, OnInit, OnDestroy} from '@angular/core';
import {ConfigService} from '../../core/config.service';
import * as _ from 'lodash';
import {ProjectService} from '../../core/project.service';
import {ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'cfm-project-form',
    templateUrl: './project-form.component.html'
})

export class ProjectFormComponent implements OnInit, OnDestroy {
    projectForm: FormGroup;
    projectType: number;
    projectId: number;
    types: any;
    modes = [];
    scoreSettingAvailable: any;
    titleAlert: string = 'This field is required';
    private sub: any;
    private modesSelected = [];

    constructor(private configService: ConfigService,
                private projectService: ProjectService,
                private route: ActivatedRoute,
                public toastr: ToastsManager,
                private formBuilder: FormBuilder) {
        this.projectForm = formBuilder.group({
            'Name': [null, Validators.required],
            'Description': [null],
            'QuestionnaireTypeId': [null, Validators.required],
            'IsScoringAllowed': [false]
        });
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.projectId = +params['id'];
            if (this.projectId) {
                this.getProjectDetails();
            }

        });

        // this.projectForm.get('validate').valueChanges.subscribe(
        //     (validate) => {
        //         // if (validate == '1') {
        //         //     this.projectForm.get('projectName').setValidators([Validators.required, Validators.minLength(3)]);
        //         //     this.titleAlert = 'You need to specify at least 3 characters';
        //         // } else {
        //         //     this.projectForm.get('projectName').setValidators(Validators.required);
        //         // }
        //         // this.projectForm.get('projectName').updateValueAndValidity();
        //     }
        // );

        this.types = this.configService.getConfigProperty()['QuestionnaireTypes'];
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    /**
     * Add new project
     *
     * @param data
     */
    onSubmit(data): void {
        data['Modes'] = this.prepareModeData();
        if (this.projectId) {
            data['Id'] = this.projectId;
            this.projectService.updateProject(data).subscribe(
                result => {
                    this.toastr.success('Updated successfully');
                    this.reloadProjects();
                },
                error => {
                    this.toastr.error(error.ErrorMessage);
                }
            )
        } else {
            this.projectService.createProject(data).subscribe(
                result => {
                    this.toastr.success('Created successfully');
                    this.reloadProjects();
                },
                error => {
                    this.toastr.error(error.ErrorMessage);
                }
            )
        }
    }

    /**
     * Reload the new projects
     */
    reloadProjects() {
        this.projectService.setProjects();
        this.projectService.reloadProjects(true);
    }

    /**
     * Prepare mode data for API
     *
     * @returns {Array}
     */
    prepareModeData() {
        let modeData = [];
        if (this.modes && this.modesSelected) {
            for (let i = 0; i < this.modes.length; i++) {
                modeData.push({
                    'ModeName': this.modes[i]['Name'],
                    'Status': (this.modesSelected.indexOf(this.modes[i]['Name']) !== -1)
                });
            }
        }

        return modeData;
    }

    /**
     * Get project type dependent fields.
     *
     * @param value
     */
    getDependentFields(value: number): void {
        const valueIndex = _.findIndex(this.types, (o) => {
            return o['ID'] === +value;
        });

        this.modes = this.types[valueIndex]['Modes'];
        this.scoreSettingAvailable = (!!this.types[valueIndex]['Scoring']);
    }

    /**
     * Push modes into mode data properties
     *
     * @param value
     */
    selectModeCheckbox(value: string): void {
        (this.modesSelected.indexOf(value) === -1) ? this.modesSelected.push(value) :
            this.modesSelected.splice(this.modesSelected.indexOf(value), 1);
    }

    /**
     * Get project details
     */
    getProjectDetails() {
        this.projectService.getProjectData(this.projectId).subscribe(
            result => {
                this.getDependentFields(result['Data']['QuestionnaireTypeId']);
                this.projectForm.setValue({
                    Name: result['Data']['Name'],
                    Description: result['Data']['Description'],
                    QuestionnaireTypeId: result['Data']['QuestionnaireTypeId'],
                    IsScoringAllowed: result['Data']['IsScoringAllowed']
                });
            },
            error => {
                this.toastr.error(error);
            }
        );
    }
}
