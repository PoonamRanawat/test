import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {PageNotFoundComponent} from './not-found.component';
import {ProjectFormComponent} from './project/project-form/project-form.component';
import {QuestionnaireTabComponent} from './project/questionnaire-tab/questionnaire-tab.component';

const appRoutes: Routes = [
    {path: '', component: ProjectComponent},
    {path: 'project/add', component: ProjectFormComponent},
    {path: 'project/:id', component: ProjectFormComponent},
    {path: 'project/:id/questionnaire', component: QuestionnaireTabComponent, pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
