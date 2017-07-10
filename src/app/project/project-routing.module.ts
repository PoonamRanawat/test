import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectComponent} from './project.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {QuestionnaireTabComponent} from './questionnaire-tab/questionnaire-tab.component';

const routes: Routes = [
    {path: '', component: ProjectComponent},
    {path: 'add', component: CreateProjectComponent},
    {path: 'questionnaire', component: QuestionnaireTabComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {
}
