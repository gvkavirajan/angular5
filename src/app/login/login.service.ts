import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class LoginService{
    private _url:'assests/logins.json';

    constructor(private httpClient:HttpClient){}

    getLogins(){
        return this.httpClient.get(this._url);
    }
} 