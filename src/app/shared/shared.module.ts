import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule, AccordionModule, ModalModule} from 'ngx-bootstrap';
import {JWBootstrapSwitchModule} from 'jw-bootstrap-switch-ng2';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        JWBootstrapSwitchModule,
        ModalModule.forRoot(),
        ToastModule.forRoot()
    ],
    declarations: [],
    exports: [
        BsDropdownModule,
        AccordionModule,
        JWBootstrapSwitchModule,
        ModalModule,
        ToastModule
    ]
})
export class SharedModule {
}
