import { Component, OnInit } from '@angular/core';
import { employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    //empComponent = 'my first content';
    // employees = EMPLOYEES;
    // selectedEmployee: employee;

    constructor(private apiEmployeeService: EmployeeService) { }
    //employees: employee[] = [];
    employees:any = [];

    getEmployees() {
        this.apiEmployeeService.getEmployee()
        .subscribe(resEmployeeData => this.employees = resEmployeeData);
    }

    ngOnInit() {
        this.getEmployees();
    }

    onSelect(employee: string): void {
        // this.selectedEmployee = employ;
    }
}
