import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRegistrationRequest } from "../register/model/register-model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080'
  constructor(
    private httpClient: HttpClient
  ){}

  public register(registerRequest: UserRegistrationRequest): Observable<any> {
    return this.httpClient.post(`${this.url}/api/auth/signup`, registerRequest);
  }
}