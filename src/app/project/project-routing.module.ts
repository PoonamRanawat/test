import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectComponent} from './project.component';
import {ProjectFormComponent} from './project-form/project-form.component';
import {QuestionnaireTabComponent} from './questionnaire-tab/questionnaire-tab.component';

const routes: Routes = [
    {path: '', component: ProjectComponent},
    {path: 'add', component: ProjectFormComponent},
    {path: 'questionnaire', component: QuestionnaireTabComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {
}
