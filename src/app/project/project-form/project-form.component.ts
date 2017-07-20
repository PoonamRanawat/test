import {Component, OnInit, OnDestroy} from '@angular/core';
import {ConfigService} from '../../core/config.service';
import * as _ from 'lodash';
import {ProjectService} from '../../core/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'cfm-project-form',
    templateUrl: './project-form.component.html'
})

export class ProjectFormComponent implements OnInit, OnDestroy {
    projectForm: FormGroup;
    projectId: number;
    types: any;
    modes = [];
    scoreSettingAvailable: any;
    private sub: any;
    private modesSelected = [];

    constructor(private configService: ConfigService,
                private projectService: ProjectService,
                private route: ActivatedRoute,
                public toastr: ToastsManager,
                private formBuilder: FormBuilder,
                private router: Router) {
        this.projectForm = formBuilder.group({
            'Name': [null, Validators.required],
            'Description': [null],
            'QuestionnaireTypeId': [null, Validators.required],
            'IsScoringAllowed': [false],
            'Modes': [[], Validators.required]
        });
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.projectId = +params['id'];
            if (this.projectId) {
                this.getProjectDetails();
                //Disable the project type field in edit mode
                this.projectForm.get('QuestionnaireTypeId').disable();
            }

        });

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
                    this.toastr.success(result['Message']);
                    this.reloadProjects();
                },
                error => {
                    this.toastr.error(JSON.parse(error._body).Message);
                }
            )
        } else {
            this.projectService.createProject(data).subscribe(
                result => {
                    this.toastr.success(result['Message']);
                    this.reloadProjects();
                    this.router.navigateByUrl(`/project/${result['Data']['Id']}`);
                },
                error => {
                    this.toastr.error(JSON.parse(error._body).Message);
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
        if (this.projectId && this.modesSelected.length === 0) {
            return this.projectForm.get('Modes').value;
        }
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
        this.projectForm.get('Modes').setValue('');
    }

    /**
     * Push modes into mode data properties
     *
     * @param value
     */
    selectModeCheckbox(value: string): void {
        (this.modesSelected.indexOf(value) === -1) ? this.modesSelected.push(value) :
            this.modesSelected.splice(this.modesSelected.indexOf(value), 1);

        if (this.modesSelected.length === 0) {
            this.projectForm.get('Modes').setValue('');
        }
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
                    IsScoringAllowed: result['Data']['IsScoringAllowed'],
                    Modes: result['Data']['Modes']
                });
            },
            error => {
                this.toastr.error(error);
            }
        );
    }

    /**
     * Check if mode is selected
     *
     * @param modeName
     * @returns {any}
     */
    isModeSelected(modeName: string): boolean {
        const modesValue = this.projectForm.get('Modes').value;
        if (modesValue.length) {
            const valueIndex = _.findIndex(this.projectForm.get('Modes').value, (o) => {
                return o['ModeName'] === modeName;
            });

            if (valueIndex >= 0) {
                return modesValue[valueIndex]['Status'];
            }
        }
        return false;
    }
}
