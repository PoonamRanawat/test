import {Component, OnInit} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'cfm-questionnaire',
    templateUrl: './questionnaire.component.html',
    animations: [
        trigger('slideInOut', [
            state('out', style({
                width: 0,
                overflow: 'hidden'
            })),
            transition('in => out', animate('200ms ease-in-out')),
            transition('out => in', animate('200ms ease-in-out'))
        ]),
    ]
})
export class QuestionnaireComponent implements OnInit {
    leftMenuState: string = 'in';
    rightMenuState: string = 'in';

    constructor() {
    }

    ngOnInit() {
    }

    toggleLeftMenu() {
        this.leftMenuState = this.leftMenuState === 'out' ? 'in' : 'out';
    }

    toggleRightMenu() {
        this.rightMenuState = this.rightMenuState === 'out' ? 'in' : 'out';
    }
}
