//@todo: This file is having hardcoded values, replace it later when we have API in place.
import {Injectable} from '@angular/core';
import {Menu} from './menu';

@Injectable()
export class MenuService {
    menus: any;
    activeMenus: any;

    constructor() {
        this.menus = {
            alerts: [],
            languages: [],
            user: [],
            left: [],
            quick: []
        };

        this.activeMenus = {
            alerts: 0,
            languages: 0,
            user: 0,
            left: 0,
            quick: 0
        };
    }

    /**
     * Get different menu on basis of location.
     *
     * @param location
     * @returns {any}
     */
    getMenuConfig(location: string): any {
        if (!this.menus[location]) return null;
        return this.menus[location];
    }

    /**
     * Add menu values.
     *
     * @param location
     * @param newConfig
     */
    add(location: string, newConfig: Menu): void {
        if (this.menus[location]) {
            this.menus[location].push(newConfig);
            newConfig.position = this.menus[location].length - 1;
        }
    }

    /**
     * Insert value in a particular menu.
     *
     * @param location
     * @param position
     * @param newConfig
     */
    insert(location: string, position: number, newConfig: Menu): void {
        if (this.menus[location]) {
            this.menus[location].splice(position, 0, newConfig);
            newConfig.position = position;
        }
    }

    /**
     * Update the menu config
     *
     * @param location
     * @param config
     */
    update(location: string, config: any) {
        if (this.menus[location] && config.position >= 0 && config.position < this.menus[location].length) {
            Object.assign(this.menus[location][config.position], config);
        }
    }

    /**
     * Set active value of a menu item
     *
     * @param location
     * @param index
     */
    setActive(location: string, index: number) {
        if (this.menus[location] && index >= 0 && index < this.menus[location].length) {
            this.activeMenus[location] = index;
        }
    }

    /**
     * Get active menu item.
     *
     * @param location
     * @returns {any}
     */
    getActive(location: string): Menu {
        if (this.menus[location]) {
            let idx = this.activeMenus[location];
            if (idx >= 0 && idx < this.menus[location].length) {
                return this.menus[location][idx];
            } else if (this.menus[location].length > 0) return this.menus[location][0];
            return null;
        }
    }

}
