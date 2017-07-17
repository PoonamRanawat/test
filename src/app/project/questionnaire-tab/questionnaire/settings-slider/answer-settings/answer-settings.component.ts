import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cfm-answer-settings',
    templateUrl: './answer-settings.component.html',
    styles: []
})
export class AnswerSettingsComponent implements OnInit {
    private answerSettingsCollapse;
    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Toggle answer settings
     *
     */
    toggleAnswerSetting() {
        this.answerSettingsCollapse = !this.answerSettingsCollapse;
    }
}
