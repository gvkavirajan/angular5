import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //in html using input
import { HttpClientModule } from '@angular/common/http'; //creating service 
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';

@NgModule({
    declarations: [EmployeeComponent,EmployeeDetailsComponent],
    imports: [CommonModule,FormsModule,HttpClientModule],
    exports: [EmployeeComponent,EmployeeDetailsComponent],
    providers:[EmployeeService]
})

export class EmployeeModule {}