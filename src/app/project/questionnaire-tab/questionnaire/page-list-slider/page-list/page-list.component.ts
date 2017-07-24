import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';
import {PageService} from '../../../../page.service'

@Component({
  selector: 'cfm-page-list',
  templateUrl: './page-list.component.html',
  styles: []
})
export class PageListComponent implements OnInit {
    pageListCollapse = true;
    private projectId: number;
    pageList = [];
    constructor(private route: ActivatedRoute,
                private pageService: PageService,
                public toastr: ToastsManager) {
    }
    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.projectId = +params['id'];
        });
        this.pageService.getPageList(this.projectId).subscribe(
            result => {
                this.pageList = result['Data'];
            }, error => {
                this.toastr.error(error);
            }
        );
    }

    /**
     *  Toggle page list
     *
     */
    togglePageList() {
        this.pageListCollapse = !this.pageListCollapse;
    }

}
