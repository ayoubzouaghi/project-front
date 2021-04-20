import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  login(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiUrl + 'login', data)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  sendInvitation(data: any): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.post<any>(environment.apiUrl + 'add/user', data)
        .toPromise()
        .then((response) => {
          resolve(response);
          return response;

        })
        .catch((error) => {
          reject(error);
        });

    });
  }

  updateUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put<any>(environment.apiUrl + 'users/edit/' + data.id, data)
        .toPromise()
        .then((response) => {
          resolve(response);
          return response.user
        })
        .catch((error) => {
          reject(error);
        });

    });
  }

  AdminUpdateUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put<any>(environment.apiUrl + 'admin/edit/user/' + data.id, data)
        .toPromise()
        .then((response) => {
          resolve(response);
          return response.user
        })
        .catch((error) => {
          reject(error);
        });

    });
  }
  getuser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.apiUrl + 'users/details')
        .toPromise()
        .then((response) => {
          resolve(response);
          return response.user;
        })
        .catch((error) => {
          reject(error);
        });

    });

  }
  updateProfilImage(image: any): Observable<any> {
    return this.http.put(environment.apiUrl + 'users/update/profil/image', { image: image })
  }
  getProfilImage(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/profil/image', {})
        .toPromise()
        .then((response) => {
          resolve(response);
          return response;
        })
        .catch((error) => {
          reject(error);
        });
    })
  }
  logout(): Observable<any> {
    return this.http.post(environment.apiUrl + 'users/logout', {})
  }
  getAllUsers(): Observable<any> {
    return this.http.get(environment.apiUrl + 'users/all', {})
  }
  deleteUser(data: any): Observable<any> {
    return this.http.delete(environment.apiUrl + 'users/delete/' + data.id)
  }
  AddUser(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'users/user/register', { data })
  }
  gettokenstate(token: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'users/verif/token', { token })

  }
  changePassword(data: any): Observable<any> {
    return this.http.put(environment.apiUrl + 'users/update/password', data)
  }
}
