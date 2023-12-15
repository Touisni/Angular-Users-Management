import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiLink = 'https://reqres.in/api/users';

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiLink}/${userId}`;
    return this.http.delete<void>(url);
  }

  constructor(private http: HttpClient) { }
    getUsers(page: number, perPage: number): Observable<any> {
    const url = `${this.apiLink}?page=${page}&per_page=${perPage}`;
    return this.http.get(url);
  }
}
