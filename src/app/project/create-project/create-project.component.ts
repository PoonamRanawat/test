import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjectSettings} from '../projectSettings';
@Component({
    selector: 'cfm-create-project',
    templateUrl: './create-project.component.html',
    styles: [],
    providers: [ProjectSettings]
})
export class CreateProjectComponent implements OnInit {
    name: string;
    description: string;
    type: string;
    modes = [{name: 'Online', value: false},
        {name: 'Offline', value: true},
        {name: 'SMS', value: false},
        {name: 'Feedback Widget', value: false}];
    projectSettings: ProjectSettings;

    constructor(ps: ProjectSettings) {
        this.projectSettings = ps;
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        this.projectSettings.name = form.value.name;
        this.projectSettings.description = form.value.description;
        this.projectSettings.type = form.value.projectType;
        console.log(this.projectSettings.type);
        // this.projectSetings.mode.push({name: 'online', value: form.value.online});
    }
}
