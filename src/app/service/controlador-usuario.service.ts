import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDate } from '../class/user-date';

@Injectable({
  providedIn: 'root'
})
export class ControladorUsuarioService {

  constructor(private http: HttpClient) { }


  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  public validateToken(email: any, password: any): Observable<any> {
    const url = 'http://localhost:3000/login';
    const requestBody = {
      email: email,
      password: password,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(url, requestBody);
  }

  public registerUser() {
    const name = 'admin';
    const password = 'admin';
    const requestBody = { name, password };
    return this.http.post('http://localhost:3000/registro', requestBody);
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr === undefined || tokenStr === '' || tokenStr === null) {
      return false;
    } else {
      return true;
    }
  }

  //cerranis sesion y eliminamos el token del localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }


  //obtenemos el token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setToken(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  public getSaveCurrentUser() {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        return JSON.parse(userString);
      } catch (error) {
        console.error('Error al analizar el objeto de usuario almacenado en localStorage:', error);
      }
    }
    return null;
  }

  public setCurrentUser(user: UserDate) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
