import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { EmployeeModule} from './employee/employee.module';
import { CompanyModule } from './company/company.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';;
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router'
//import { ReactiveFormsModule }    from '@angular/forms'; //When import then only use FormBuilder,FormGroup

const appRoutes: Routes = [
  {path: 'company', component: CompanyComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo:'/company',pathMatch: 'full'},
  {path: '**',redirectTo:'/company',pathMatch: 'full'}
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,EmployeeModule, CompanyModule,RouterModule.forRoot(appRoutes),LoginModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
