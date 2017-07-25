import {Injectable} from '@angular/core';
import {ApiService} from '../core/api.service';

@Injectable()
export class PageService {

    constructor(private apiService: ApiService) {
    }

    /**
     * Create Paqe
     *
     * @param body
     * @returns {Observable<R|T>}
     */
    createPage(body: Object) {
        return this.apiService.postMethod('page', body);
    }

    /**
     * Get page list By Id
     *
     * @param questionnaireId
     * @returns {Observable<R|T>}
     */
    getPageList(questionnaireId: number) {
        return this.apiService.getMethod(`page/GetPagesByQuestionnaireId?questionnaireId=${questionnaireId}`);
    }

    /**
     * Copy a page
     *
     * @param {number} pageId
     */
    copyPage(pageId: number) {
        // todo: type in the API URL
        // return this.apiService.postMethod('', pageId);
        console.log('Copy API URL will come here page.service.ts ' + pageId);
    }
}
