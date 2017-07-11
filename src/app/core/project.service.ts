//@todo: This file is having hardcoded values, replace it later when we have API in place.
import {Injectable} from '@angular/core';

@Injectable()
export class ProjectService {
    projects: any;

    constructor() {
        this.projects = [{
            id: 1,
            name: 'Project 1',
            description: 'Project description',
            type: 'Project type',
            mode: 'online',
            scoreSetting: true
        }];
    }

    addProject() {

    }

    /**
     * Get projects
     * @returns {any}
     */
    getProjects() {
        return this.projects;
    }
}
