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
import {NotificationComponent} from './shared/notification/notification.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        ProjectModule,
        RouterModule,
        ToastModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
