import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'cfm-notification',
    templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
    @Input() notifications: any;

    constructor() {
    }

    ngOnInit() {

    }

}
