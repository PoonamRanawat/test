import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {QuestionnaireComponent} from './questionnaire.component';
import {QuestionnaireRoutingModule} from './questionnaire-routing.module'

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        QuestionnaireRoutingModule
    ],
    declarations: [
        QuestionnaireComponent
    ]
})
export class QuestionnaireModule {
}
