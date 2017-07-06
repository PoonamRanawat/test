import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {CoreService} from './core.service';
import {MenuService} from './menu.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        SideBarComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        SideBarComponent,
        FooterComponent
    ],
    providers: [
        CoreService,
        MenuService
    ]
})
export class CoreModule {
}
