import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ServceTowService {

  constructor(private http: HttpClient) { }
  //Post

  public addUseeer(usr){
    return this.http.post("http://localhost:9393/users/signUp",usr);
  }
//Get
  public getAllUsers(userr) {
    return this.http.get('http://localhost:9393/users/GetAll', userr);
  }
}
