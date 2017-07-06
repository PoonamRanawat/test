import {Injectable} from '@angular/core';

@Injectable()
export class CoreService {
    flag = false;

    constructor() {
    }

    /**
     * Set side menu toggle flag
     *
     * @param value
     */
    setToggleClass(value: boolean): void {
        this.flag = value;
    }

    /**
     * Get side menu toggle flag
     *
     * @returns {boolean}
     */
    getToggleClass(): boolean {
        return this.flag;
    }

}
