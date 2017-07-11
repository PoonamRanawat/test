import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cfm-group-tree',
    templateUrl: './group-tree.component.html',
    styles: []
})
export class GroupTreeComponent implements OnInit {
    groupListCollapse = true;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     *  Toggle group list
     */
    toggleGroupList() {
        this.groupListCollapse = !this.groupListCollapse;
    }

}
