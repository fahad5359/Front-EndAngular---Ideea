import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private htpp: HttpClient) {
  }


  //Post
  public addingUser(userr) {
    //Better Test the Req in PostMan
    return this.htpp.post("http://localhost:9191/addOne", userr); //we add the User Object to the Request  //if req has a text response we can add ,{responseType:"text" as "json"}.
  }


  //Get
  public getAllUsers(userr) {
    return this.htpp.get('http://localhost:9191/getAll', userr)
  }

  //Tst Get by Id
  public getUserById(id) {
    return this.htpp.get('http://localhost:9191/getById/' + id)
  }


  //Delete
  public deleteUser(id) {
    return this.htpp.delete("http://localhost:9191/deletById/" + id);
  }

  //Tst Delet by Nem
  public deleteByName(userName) {
    return this.htpp.delete("http://localhost:9191/deletByUserName/", userName)
  }
}

