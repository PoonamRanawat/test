import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
    selector: 'cfm-page-list-slider',
    templateUrl: './page-list-slider.component.html',
    styleUrls: ['/page-list-slider.component.css'],
    styles: [],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class PageListSliderComponent implements OnInit {
    menuState: string = 'out';

    constructor() {
    }

    ngOnInit() {
    }

    toggleMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

}
