import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService{
    private _url:'assests/logins.json';

    constructor(private httpClient:HttpClient){}

    getLogins(email:string, password:string){

        return this.httpClient.post(this._url,{ email:email, password: password});
    }
} 