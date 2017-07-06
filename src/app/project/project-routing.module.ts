import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectComponent} from './project.component';
import {CreateProjectComponent} from './create-project/create-project.component';

const routes: Routes = [
    {path: '', component: ProjectComponent, pathMatch: 'full'},
    {path: 'add', component: CreateProjectComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {
}
