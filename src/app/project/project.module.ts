import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {BsDropdownModule, AccordionModule, ModalModule} from 'ngx-bootstrap';
import {JWBootstrapSwitchModule} from 'jw-bootstrap-switch-ng2';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ProjectRoutingModule,
        BsDropdownModule,
        AccordionModule,
        JWBootstrapSwitchModule,
        ModalModule,
    ],
    declarations: [
        ProjectComponent,
        CreateProjectComponent
    ]
})
export class ProjectModule {
}
