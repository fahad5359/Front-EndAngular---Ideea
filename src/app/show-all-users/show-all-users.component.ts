import {Component, OnInit} from '@angular/core';
import {Useer} from "../Entitys/useer";
import {MyService} from "../MyService";
import {ServceTowService} from "../servce-tow.service";

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  // usr:Useer=new Useer("","","","","")
  user: any
  id: number
  passShow = false
  asd:string= "klb"

  constructor(private service: ServceTowService) {}
  ngOnInit() {
    let resp = this.service.getAllUsers(this.user);
    resp.subscribe((data) => this.user = data);
    // let resp2= this.service
  }

  // public searchUserById(){
  //   let resp=this.service.getUserById(this.id);
  //   resp.subscribe((data)=>this.user=data)
  // }

  ShowHidepass() {


    if (this.passShow == true) {
      this.passShow = false
    } else if (this.passShow == false) {
      this.passShow = true
    }
  }


}
