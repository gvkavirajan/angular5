import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "./login.service";
import { first } from 'rxjs/operators';

@Component({
        selector:'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

    loginForm:FormGroup;
    loading:false;
    submitted:boolean = false;
    returnUrl:string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router:Router,
        private loginService: LoginService
    )
    {}

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit(){
        this.submitted=true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loginService.getLogins(this.f.email.value, this.f.password.value)
    }
}
