import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {PageNotFoundComponent} from './not-found.component';
import {CreateProjectComponent} from './project/create-project/create-project.component';

const appRoutes: Routes = [
    {path: '', component: ProjectComponent},
    {path: 'create', component: CreateProjectComponent},
    {path: 'questionnaire', loadChildren: 'app/questionnaire/questionnaire.module#QuestionnaireModule'},
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
