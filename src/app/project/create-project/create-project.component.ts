import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjectSettings} from '../projectSettings';
import {ConfigService} from '../../core/config.service';
import * as _ from 'lodash';

@Component({
    selector: 'cfm-create-project',
    templateUrl: './create-project.component.html',
    styles: [],
    providers: [ProjectSettings]
})
export class CreateProjectComponent implements OnInit {
    name: string;
    description: string;
    projectSettings: ProjectSettings;
    private types = [];
    private modes = [];
    private scoreSettingAvailable: boolean;

    constructor(ps: ProjectSettings, private configService: ConfigService) {
        this.projectSettings = ps;
    }

    ngOnInit() {
        this.types = this.configService.getConfigProperty()['QuestionnaireTypes'];

    }

    onSubmit(form: NgForm) {
        console.log(form.value);
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
