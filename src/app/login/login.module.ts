import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";
import { ReactiveFormsModule }    from '@angular/forms';

@NgModule({
declarations:[LoginComponent],
imports: [ReactiveFormsModule],
exports: [LoginComponent],
providers: [LoginService]
})

export class LoginModule{}