//@todo: This file is having hardcoded values, replace it later when we have API in place.
import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProjectService {
    projects: any;
    private subject = new Subject<boolean>();

    constructor(private apiService: ApiService) {
    }

    /**
     * Set the status to reload the projects
     *
     * @param reloadProjects
     */
    reloadProjects(reloadProjects: boolean) {
        this.subject.next(reloadProjects);
    }

    /**
     * Send the status to reload the projects
     *
     * @returns {Observable<boolean>}
     */
    getReloadedProjects(): Observable<any> {
        return this.subject.asObservable();
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
    getProjectData(projectId: number) {
        return this.apiService.getMethod(`questionnaire?id=${projectId}`);
    }

    /**
     * Create new project
     *
     * @param body
     * @returns {Observable<R|T>}
     */
    createProject(body) {
        return this.apiService.postMethod('project/create', body);
    }

    /**
     * Update project
     *
     * @param body
     * @returns {Observable<R|T>}
     */
    updateProject(body) {
        return this.apiService.putMethod('questionnaire/update', body);
    }

    /**
     * Delete project
     *
     * @param projectId
     * @returns {Observable<R|T>}
     */
    deleteProject(projectId) {
        return this.apiService.deleteMethod(`questionnaire/delete?id=${projectId}`);
    }

}