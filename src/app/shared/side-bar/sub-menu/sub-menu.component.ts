import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'cfm-sub-menu',
    templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {
    @Input() subMenu: any;
    constructor() {
    }

    ngOnInit() {
    }

}
