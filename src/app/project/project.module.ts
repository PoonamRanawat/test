import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {AccordionModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {JWBootstrapSwitchModule} from 'jw-bootstrap-switch-ng2';
import {SharedModule} from '../shared/shared.module';
import {DeleteProjectComponent} from './delete-project/delete-project.component';
import {QuestionnaireTabComponent} from './questionnaire-tab/questionnaire-tab.component';
import {AddPageComponent} from './add-page/add-page.component';
import { PageListSliderComponent } from './questionnaire-tab/questionnaire/page-list-slider/page-list-slider.component';
import { PageThumbnailComponent } from './questionnaire-tab/questionnaire/page-list-slider/page-list/page-thumbnail/page-thumbnail.component';
import { QuestionnaireComponent } from './questionnaire-tab/questionnaire/questionnaire.component';
import { PageListComponent } from './questionnaire-tab/questionnaire/page-list-slider/page-list/page-list.component';
import { GroupTreeComponent } from './questionnaire-tab/questionnaire/page-list-slider/group-tree/group-tree.component';
import { QuestionnaireTopMenuComponent } from './questionnaire-tab/questionnaire/questionnaire-top-menu/questionnaire-top-menu.component';

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
        QuestionnaireTabComponent,
        AddPageComponent,
        PageListSliderComponent,
        PageThumbnailComponent,
        QuestionnaireComponent,
        PageListComponent,
        GroupTreeComponent,
        QuestionnaireTopMenuComponent
    ]
})
export class ProjectModule {
}
