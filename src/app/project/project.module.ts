import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {AccordionModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {JWBootstrapSwitchModule} from 'jw-bootstrap-switch-ng2';
import {SharedModule} from '../shared/shared.module';
import {DeleteProjectComponent} from './delete-project/delete-project.component';
import {QuestionnaireTabComponent} from './questionnaire-tab/questionnaire-tab.component';

@NgModule({
    imports: [
        SharedModule,
        ProjectRoutingModule,
        AccordionModule,
        JWBootstrapSwitchModule,
        ModalModule,
        TabsModule.forRoot()
    ],
    declarations: [
        ProjectComponent,
        CreateProjectComponent,
        DeleteProjectComponent,
        QuestionnaireTabComponent
    ]
})
export class ProjectModule {
}
