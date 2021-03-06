import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cfm-page-settings',
    templateUrl: './page-settings.component.html',
    styles: []
})
export class PageSettingsComponent implements OnInit {
    pageSettingsCollapse = false;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Toggle page settings
     *
     */
    togglePageSetting() {
        this.pageSettingsCollapse = !this.pageSettingsCollapse;
    }
}
