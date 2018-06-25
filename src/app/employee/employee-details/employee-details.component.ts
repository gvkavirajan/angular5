import { Component, Input } from '@angular/core';
import { employee } from '../employee';


@Component ({
    selector: 'app-emp-details',
    templateUrl: '../employee-details/employee-details.component.html'
})

export class EmployeeDetailsComponent {
    title3 = 'Employee Details';
    @Input() employee: string;
    // selectedEmployee = {};

    constructor(){}
}