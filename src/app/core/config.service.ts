//@todo: This file is having hardcoded values, replace it later when we have API in place.
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

    constructor() {
    }

    /**
     * Get different menu on basis of location.
     *
     * @param location
     * @returns {any}
     */
    getConfigProperty(property: string): any {
        return [{
            id: 1,
            name: 'Project 1'
        }, {
            id: 2,
            name: 'Project 2'
        }]
    }
}
