import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FatturaService {
  myApiUrl: string = environment.pathApi;

  constructor(private http: HttpClient, private router: Router) {}


  getAll() {
    return this.http.get<any>(
      this.myApiUrl + '/api/fatture?page=0&size=20&sort=id,ASC'
    );
  }

  getByPage(k:number) {
    return this.http.get<any>(
      this.myApiUrl + '/api/fatture?page='+ k+'&size=20&sort=id,ASC'
    );
  }

  clickdettagli(k: number) {
    return this.http.get<any>(this.myApiUrl + '/api/fatture/' + k);
  }

  modifica(data: any) {
    return this.http.put<any>(this.myApiUrl + '/api/fatture/' + data.id, data);
  }

  onElimina(data: any) {
    return this.http.delete<any>(this.myApiUrl + '/api/fatture/' + data);
  }
}
