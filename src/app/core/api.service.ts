import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {APP_CONFIG} from '../app.config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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
  postMethod(url: string, body: string) {
    return this.http.post(APP_CONFIG.apiUrl + url, body, this.getOptions())
        .map((response: Response) => response.json()).catch(this.handleError);
  }

  /**
   * POST api call.
   *
   * @param url
   * @param body
   */
  putMethod(url: string, body: string) {
    return this.http.put(APP_CONFIG.apiUrl + url, body, this.getOptions())
        .map((response: Response) => response.json()).catch(this.handleError);
  }

  /**
   * Delete api call.
   *
   * @param url
   * @param body
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
    const auth = localStorage.getItem('token');
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + auth
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
    // @todo: Change this later when you work on authentication.
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
