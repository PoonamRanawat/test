//@todo: This file is having hardcoded values, replace it later when we have API in place.
import {Injectable} from '@angular/core';
import {config} from './config';
import * as _ from 'lodash';

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
        return config['Project'][0];
    }

    /**
     * Get configuration properties By modeType
     *
     * @returns {any}
     */
    getConfigPropertyByModeId(modeId: number): any {
        const valueIndex = _.findIndex(config['Project'][0]['QuestionnaireTypes'], (o) => {
            return o['ID'] === modeId;
        });

        return config['Project'][0]['QuestionnaireTypes'][valueIndex];
    }

}
