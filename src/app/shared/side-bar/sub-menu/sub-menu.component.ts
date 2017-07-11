import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: '[cfm-sub-menu]',
    templateUrl: './sub-menu.component.html'
})
export class SubMenuComponent implements OnInit {
    @Input('cfm-sub-menu') subMenu: any;

    constructor() {
    }

    ngOnInit() {
    }

}
