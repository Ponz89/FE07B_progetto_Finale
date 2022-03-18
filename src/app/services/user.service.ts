import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myApiUrl:string = environment.pathApi;
  constructor(private http:HttpClient) { }
 getAll(p: number){
  return this.http.get<any>(
    this.myApiUrl + '/api/users?page=' + p + '&size=20&sort=id,ASC'
    );
 }
}
