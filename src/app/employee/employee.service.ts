import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService{

    private _url: string = 'assets/employees.json';
    constructor(private httpClient : HttpClient) {}

    getEmployee() {
        return this.httpClient.get(this._url);
    }
}
