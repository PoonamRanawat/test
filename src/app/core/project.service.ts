//@todo: This file is having hardcoded values, replace it later when we have API in place.
import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {ApiService} from './api.service';

@Injectable()
export class ProjectService {
    projects: any;

    constructor(private apiService: ApiService) {
    }

    /**
     * Add new project
     *
     * @param formValues
     */
    addProject(formValues: Object): boolean {
        if (formValues) {
            this.projects.push({
                id: 2,
                name: formValues['name'],
                description: formValues['description'],
                type: formValues['projectType'],
                mode: 'online',
                scoreSetting: formValues['score']
            });
            return true;
        }

    }

    /**
     * Set projects
     */
    setProjects() {
        this.projects = this.apiService.getMethod('project');
    }

    /**
     * Get projects
     * @returns {any}
     */
    getProjects() {
        if (!this.projects) {
            this.setProjects();
        }

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

        return this.projects[projectIndex];
    }
}