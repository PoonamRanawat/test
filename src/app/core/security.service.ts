import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class SecurityService {
    currentUser: User;

    constructor() {
    }

    /**
     * Has access
     *
     * @param action
     * @param resource
     * @returns {boolean}
     */
    hasAccess(action, resource): boolean {
        return true;
    }
}
