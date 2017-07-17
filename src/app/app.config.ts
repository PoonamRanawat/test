import {environment} from '../environments/environment';

let config = {
    'apiUrl': ''
};

if (environment.production) {
    config = {
        'apiUrl': ''
    };
}

export const APP_CONFIG = config;