import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyService {
    private _url: string = 'assets/companies.json';

    constructor(private httpClient: HttpClient) { }

    getCompany() {
        return this.httpClient.get(this._url);
    }
}