import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {ProjectFormComponent} from './project-form/project-form.component';
import {ProjectRoutingModule} from './project-routing.module';
import {AccordionModule, ModalModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
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
import { SettingsSliderComponent } from './questionnaire-tab/questionnaire/settings-slider/settings-slider.component';
import { PageSettingsComponent } from './questionnaire-tab/questionnaire/settings-slider/page-settings/page-settings.component';
import { QuestionSettingsComponent } from './questionnaire-tab/questionnaire/settings-slider/question-settings/question-settings.component';
import { AnswerSettingsComponent } from './questionnaire-tab/questionnaire/settings-slider/answer-settings/answer-settings.component';
import { QuestionnaireMainComponent } from './questionnaire-tab/questionnaire/questionnaire-main/questionnaire-main.component';
import { DeletePageComponent } from './questionnaire-tab/questionnaire/page-list-slider/page-list/page-thumbnail/delete-page/delete-page.component';

@NgModule({
    imports: [
        SharedModule,
        ProjectRoutingModule,
        AccordionModule,
        JWBootstrapSwitchModule,
        ModalModule,
        TabsModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        ProjectComponent,
        ProjectFormComponent,
        DeleteProjectComponent,
        QuestionnaireTabComponent,
        AddPageComponent,
        PageListSliderComponent,
        PageThumbnailComponent,
        QuestionnaireComponent,
        PageListComponent,
        GroupTreeComponent,
        QuestionnaireTopMenuComponent,
        SettingsSliderComponent,
        PageSettingsComponent,
        QuestionSettingsComponent,
        AnswerSettingsComponent,
        QuestionnaireMainComponent,
        DeletePageComponent
    ]
})
export class ProjectModule {
}
