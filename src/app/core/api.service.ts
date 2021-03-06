import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {APP_CONFIG} from '../app.config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    /**
     * GET api call.
     *
     * @param url
     */
    getMethod(url: string) {
        return this.http.get(APP_CONFIG.apiUrl + url, this.getOptions())
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    /**
     * POST api call.
     *
     * @param url
     * @param body
     */
    postMethod(url: string, body: Object) {
        return this.http.post(APP_CONFIG.apiUrl + url, body, this.getOptions())
            .map((response: Response) => response.json()).catch(this.handleError);
    }

    /**
     * POST api call.
     *
     * @param url
     * @param body
     */
    putMethod(url: string, body: Object) {
        return this.http.put(APP_CONFIG.apiUrl + url, body, this.getOptions())
            .map((response: Response) => response.json()).catch(this.handleError);
    }

    /**
     * Delete api call.
     *
     * @param url
     */
    deleteMethod(url: string) {
        return this.http.delete(APP_CONFIG.apiUrl + url, this.getOptions())
            .map((response: Response) => response.json()).catch(this.handleError);
    }

    /**
     * Get request headers
     *
     * @returns {RequestOptions}
     */
    private getOptions() {
        const headers = new Headers({
            'Content-Type': 'application/json',
        });
        return new RequestOptions({headers: headers});

    }

    /**
     * Check the error message.
     *
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: Response | any) {
        console.error(error);
        return Observable.throw(error);
    }
}
