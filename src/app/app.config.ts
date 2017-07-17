import {environment} from '../environments/environment';

let config = {
    'apiUrl': 'https://aqua-test.andagon.com/aquaWeb/api/'
};

if (environment.production) {
    config = {
        'apiUrl': 'https://aqua-test.andagon.com/aquaWeb/api/'
    };
}

export const APP_CONFIG = config;