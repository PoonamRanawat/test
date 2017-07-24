import { Injectable } from '@angular/core';
import {ApiService} from '../core/api.service';

@Injectable()
export class PageService {

    constructor(private apiService: ApiService) {
    }

    /**
     * Craete Paqe
     *
     * @param body
     */
    createPage(body: Object) {
        return this.apiService.postMethod('page', body);
    }

    /**
     * Get page list By Id
     *
     * @param QuestionnaireId
     * @returns {Observable<R|T>}
     */
    getPageList(QuestionnaireId: number) {
        return this.apiService.getMethod(`page/GetPagesByQuestionnaireId?questionnaireId=${QuestionnaireId}`);
    }
}
