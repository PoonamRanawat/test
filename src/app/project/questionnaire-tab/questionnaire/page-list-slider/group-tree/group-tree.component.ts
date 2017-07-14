import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'cfm-group-tree',
    templateUrl: './group-tree.component.html',
    styles: []
})
export class GroupTreeComponent implements OnInit {
    groupListCollapse = true;
    // todo: group name and dependent page name will come from API
    nodes = [
        {
            id: 1,
            name: 'root1',
            children: [
                {id: 2, name: 'child1'},
                {id: 3, name: 'child2'}
            ]
        },
        {
            id: 4,
            name: 'root2',
            children: [
                {id: 5, name: 'child2.1'},
                {id: 6, name: 'child2.2'}
            ]
        }
    ];

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
