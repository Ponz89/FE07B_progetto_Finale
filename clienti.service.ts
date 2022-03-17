import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  myApiUrl: string = environment.pathApi;
  constructor(private http: HttpClient) {}

  getAll(p: number) {
    return this.http.get<any>(
      this.myApiUrl + '/api/clienti?page=' + p + '&size=20&sort=id,ASC'
    );
  }

  getbyID(id: number) {
    return this.http.get<any>(this.myApiUrl + '/api/clienti/' + id);
  }

  getbyCliente(id: number) {
    return this.http.get<any>(
      this.myApiUrl +
        '/api/fatture/cliente/' +
        id +
        '?page=0&size=200&sort=id,ASC'
    );
  }

  creaFattura(data: any) {
    return this.http.post<any>(this.myApiUrl + '/api/fatture', data);
  }

  aggiungi(data: any) {
    return this.http.post<any>(this.myApiUrl + '/api/clienti', data);
  }
  update(data:any){
    return this.http.put<any>(this.myApiUrl + '/api/clienti/'+data.id, data);
  }
  tipiClienti() {
    return this.http.get<any>(this.myApiUrl + '/api/clienti/tipicliente');
  }

  comuni() {
    return this.http.get<any>(
      this.myApiUrl + '/api/comuni?page=0&size=14&sort=id,ASC'
    );
  }
  province() {
    return this.http.get<any>(
      this.myApiUrl + '/api/province?page=0&size=6&sort=id,ASC'
    );
  }
  eliminaFatture(id:number){
   return this.http.delete<any>(this.myApiUrl +'/api/fatture/cliente/'+id);
  }
 eliminaCliente(id:number){
    return this.http.delete<any>(this.myApiUrl+'/api/clienti/'+id);
  }
}
