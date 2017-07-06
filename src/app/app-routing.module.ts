import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {PageNotFoundComponent} from './not-found.component';
import {CreateProjectComponent} from './project/create-project/create-project.component';

const appRoutes: Routes = [
    {path: '', component: ProjectComponent},
    {path: 'project/add', component: CreateProjectComponent},
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
