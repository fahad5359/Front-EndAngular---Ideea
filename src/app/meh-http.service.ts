import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MehHttpService {

  constructor(private httpp: HttpClient) {
  }

  //Get
  public getUser() {
    const hedr = new HttpHeaders({
      'content-type': 'application/json',
      'authenticationTokeeeeeeeeeeen': '55359'
    });
    //جب المعلومات اللي هنا وحطها في المتغير ذا
    return this.httpp.get("https://jsonplaceholder.typicode.com/users", {headers: hedr});
  }

//  Post
  public postUser(body) {

    // return this.httpp.post('https://jsonplaceholder.typicode.com/users',body)
    return this.httpp.post('http://localhost:9191/addMany', body)
  }
}

