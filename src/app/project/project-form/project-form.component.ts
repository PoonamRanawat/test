import {Component, OnInit} from '@angular/core';
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

export class ProjectFormComponent implements OnInit {
    name: string;
    description: string;
    projectSettings: ProjectSettings;
    projectId: number;
    private sub: any;
    private types = [];
    private modes = [];
    private scoreSettingAvailable: boolean;

    constructor(ps: ProjectSettings,
                private configService: ConfigService,
                private projectService: ProjectService,
                private route: ActivatedRoute) {
        this.projectSettings = ps;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.projectId = +params['id'];
            console.log(this.projectService.getProject(this.projectId));
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
        //this.projectService.addProject(form.value);
        // this.projectSettings.name = form.value.name;
        // this.projectSettings.description = form.value.description;
        // this.projectSettings.type = form.value.projectType;

    }

    /**
     * Get project type dependent fields.
     *
     * @param value
     */
    getDependentFields(value): void {
        const valueIndex = _.findIndex(this.types, (o) => {
            return o['ID'] == value;
        });

        this.modes = this.types[valueIndex]['Modes'];
        this.scoreSettingAvailable = (!!this.types[valueIndex]['Scoring']);
    }
}
