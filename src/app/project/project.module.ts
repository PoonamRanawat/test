import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {ProjectFormComponent} from './project-form/project-form.component';
import {ProjectRoutingModule} from './project-routing.module';
import {AccordionModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {JWBootstrapSwitchModule} from 'jw-bootstrap-switch-ng2';
import {SharedModule} from '../shared/shared.module';
import {DeleteProjectComponent} from './delete-project/delete-project.component';
import {QuestionnaireTabComponent} from './questionnaire-tab/questionnaire-tab.component';
import {AddPageComponent} from './add-page/add-page.component';
import {PageListSliderComponent} from './page-list-slider/page-list-slider.component';
import {PageThumbnailComponent} from './page-thumbnail/page-thumbnail.component';
import {
    FormsModule,
    FormGroup,
    FormControl
} from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        ProjectRoutingModule,
        AccordionModule,
        JWBootstrapSwitchModule,
        ModalModule,
        TabsModule.forRoot(),
        FormsModule
    ],
    declarations: [
        ProjectComponent,
        ProjectFormComponent,
        DeleteProjectComponent,
        QuestionnaireTabComponent,
        AddPageComponent,
        PageListSliderComponent,
        PageThumbnailComponent
    ]
})
export class ProjectModule {
}
