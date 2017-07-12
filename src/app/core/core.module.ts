import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuService} from './menu.service';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {ConfigService} from './config.service';
import {ProjectService} from "./project.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [
        MenuService,
        ConfigService,
        ProjectService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}

