import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'http://192.168.2.159:8080/user/createUser';

  createNewUser() {
    return this.http.get(this.baseUrl);
  }
}
