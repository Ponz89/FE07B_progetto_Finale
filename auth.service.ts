import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../_models/user';
import { loginUtente } from '../_models/loginUtente';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  nuovoUser = { username: '', email: '', password: '', role: [] };
  myApiUrl: string = environment.pathApi;

  constructor(private http: HttpClient, private router:Router) {}

  login(data: loginUtente) {
    return this.http
      .post<Users>(this.myApiUrl + '/api/auth/login', data)
      .subscribe((res) => {
        localStorage.setItem('token', res.accessToken);
        console.log('Accesso effettuato');
        this.router.navigate(['clienti']);
      });
  }
  signup(nuovoUser: any) {
    return this.http.post<any>(this.myApiUrl + '/api/auth/signup', nuovoUser);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut(){
   localStorage.clear();
   this.router.navigate(['/login']);
  }

}
