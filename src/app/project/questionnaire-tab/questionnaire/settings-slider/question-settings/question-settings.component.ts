import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cfm-question-settings',
    templateUrl: './question-settings.component.html',
    styles: []
})
export class QuestionSettingsComponent implements OnInit {
    private questionSettingsCollapse;
    constructor() {
    }
    ngOnInit() {
    }

    /**
     * Toggle question settings
     *
     */
    toggleQuestionSetting() {
        this.questionSettingsCollapse = !this.questionSettingsCollapse;
    }
}
