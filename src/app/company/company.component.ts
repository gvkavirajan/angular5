import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
    constructor(private companyService: CompanyService) { }
    companies: any = [];

    getCompanies() {
        this.companyService.getCompany()
            .subscribe(resCompanyData => this.companies = resCompanyData);
    }

    ngOnInit() {
        this.getCompanies()
    }
}