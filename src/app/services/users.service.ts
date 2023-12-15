import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../environements/environments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  deleteUser(userId: number): Observable<void> {
    const url = `${environments.apiLink}/${userId}`;
    return this.http.delete<void>(url);
  }

  constructor(protected http: HttpClient) { }
    getUsers(page: number, perPage: number): Observable<any> {
    const url = `${environments.apiLink}?page=${page}&per_page=${perPage}`;
    return this.http.get(url) as Observable<any>;
  }
}
