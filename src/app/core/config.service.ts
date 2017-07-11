//@todo: This file is having hardcoded values, replace it later when we have API in place.
import {Injectable} from '@angular/core';
import {config} from './config';

@Injectable()
export class ConfigService {

    constructor() {
    }

    /**
     * Get configuration properties
     *
     * @returns {any}
     */
    getConfigProperty(): any {
        return config;
    }
}
