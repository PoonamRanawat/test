import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {ProjectModule} from './project/project.module';
import {PageNotFoundComponent} from './not-found.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SideBarComponent} from './shared/side-bar/side-bar.component';
import {BrowserModule} from "@angular/platform-browser";
import {BsDropdownModule} from 'ngx-bootstrap';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {SubMenuComponent} from "./shared/side-bar/sub-menu/sub-menu.component";
import {QuickMenuComponent} from "./shared/quick-menu/quick-menu.component";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
        SubMenuComponent,
        QuickMenuComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        RouterModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
        ToastModule.forRoot(),
        ProjectModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
