//@todo: This file is having hardcoded values, replace it later when we have API in place.
import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ProjectService {
    projects: any;

    constructor() {
        this.projects = [{
            id: 1,
            name: 'Project 1',
            description: 'Project description',
            type: 1,
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

    /**
     * Get project details
     *
     * @param projectId
     */
    getProject(projectId: number) {
        const projectIndex = _.findIndex(this.projects, (o) => {
            return o['id'] === projectId;
        });

        return this.projects[projectIndex]['type'];
    }
}
