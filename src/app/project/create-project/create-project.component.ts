import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjectSettings} from '../projectSettings';
@Component({
  selector: 'app-create-project',
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
  projectSetings: ProjectSettings;
  constructor(ps: ProjectSettings) {
    this.projectSetings = ps;
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.projectSetings.name = form.value.name;
    this.projectSetings.description = form.value.description;
    this.projectSetings.type = form.value.projectType;
    console.log(this.projectSetings.type);
    // this.projectSetings.mode.push({name: 'online', value: form.value.online});
  }
}
