import {environment} from '../environments/environment';

let config = {
    'apiUrl': 'http://192.168.2.188:8080/api/'
};

if (environment.production) {
    config = {
        'apiUrl': 'http://192.168.2.188:8080/api/'
    };
}

export const APP_CONFIG = config;