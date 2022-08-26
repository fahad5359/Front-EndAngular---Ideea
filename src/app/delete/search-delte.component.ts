import { Component, OnInit } from '@angular/core';
import {MyService} from "../MyService";
import {Useer} from "../useer";

@Component({
  selector: 'app-delete',
  templateUrl: './search-delte.component.html',
  styleUrls: ['./search-delte.component.css']
})
export class DeleteUser implements OnInit {
// user=new Useer("","","")
  constructor(private service:MyService) { }
  userr:any


  //we want to call all users so we can delete selected one,,,
  ngOnInit(): void {
  let resons=this.service.getAllUsers(this.userr);
    resons.subscribe((data)=>this.userr=data);
  }


// public delteUser(id:number){
//   let resp=this.service.deleteUser(id);
//   resp.subscribe((data)=>this.userr=data)
// }
  public delteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.userr=data);
  }
}
