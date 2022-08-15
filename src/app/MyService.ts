import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private htpp: HttpClient) {}

  public addingUser(userr){
    //Better Test the Req in PostMan
    return this.htpp.post("http://localhost:9191/addMany",userr); //we add the User Object to the Request
  }

}

