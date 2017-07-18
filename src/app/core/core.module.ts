import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuService} from './menu.service';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {ConfigService} from './config.service';
import {ProjectService} from "./project.service";
import {ApiService} from './api.service';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [],
    exports: [],
    providers: [
        MenuService,
        ConfigService,
        ProjectService,
        ApiService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}

