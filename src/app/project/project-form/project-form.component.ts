import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjectSettings} from '../projectSettings';
import {ConfigService} from '../../core/config.service';
import * as _ from 'lodash';
import {ProjectService} from '../../core/project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'cfm-project-form',
    templateUrl: './project-form.component.html',
    styles: [],
    providers: [ProjectSettings]
})

export class ProjectFormComponent implements OnInit, OnDestroy {
    name: string;
    description: string;
    projectSettings: ProjectSettings;
    projectId: number;
    types = [];
    modes = [];
    scoreSettingAvailable: boolean;
    private sub: any;
    private modeData = ['Online'];

    constructor(ps: ProjectSettings,
                private configService: ConfigService,
                private projectService: ProjectService,
                private route: ActivatedRoute) {
        this.projectSettings = ps;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.projectId = +params['id'];
            // console.log(this.projectService.getProject(this.projectId));
        });
        this.types = this.configService.getConfigProperty()['QuestionnaireTypes'];


    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    /**
     * Add new project
     *
     * @param form
     */
    onSubmit(form: NgForm): void {
        console.log(form.value);
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
     * Push modes into modedata properties
     *
     * @param value
     */
    selectModeCheckbox(value: string): void {
        (this.modeData.indexOf(value) === -1) ? this.modeData.push(value) : this.modeData.splice(this.modeData.indexOf(value), 1);
    }
}
